import React, { useState, useEffect } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { useLoginContext } from "../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import UserHabitForm from "../components/UserHabitForm";
import HabitCard from "../components/HabitCard";
import Weekbar from "../components/WeekBar";
import { useUserContext } from "../contexts/UserContext";

const Homepage = () => {
  // Habits from server
  const [habits, setHabits] = useState([]);
  // user data
  const { user, setUser } = useUserContext();
  // User specific habits
  const [myHabits, setMyHabits] = useState([]);
  const [showHabitForm, setShowHabitForm] = useState(false);
  const { loginPending, loggedIn, setLoggedIn } = useLoginContext();
  const navigate = useNavigate();

  // Store categories in an array
  // 5 Categories: (Recycle, Commute, Water, Energy, and Food)
  const habitCategories = habits.map((habit) => habit.category);
  // Remove duplicate categories from array
  const categories = [...new Set(habitCategories)];

  /* TEMPORARY: Move to separate folder with other requests when implementing state management */
  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!loginPending && !loggedIn && !token) {
      navigate("/login");
    } else {
      setLoggedIn(true);
    }
  }, []);

  // Fetch all habits from back end
  const getAllHabits = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(API_URL + "/habit", config);
    const data = await response.json();
    const habitIds = user.habits;
    setMyHabits(data.filter((habit) => habitIds.includes(habit._id)));
    setHabits(data);
  };

  useEffect(() => {
    if (user) {
      getAllHabits();
    }
  }, [user]);

  // Close/open HabitForm
  const toggleForm = () => {
    setShowHabitForm(!showHabitForm);
  };

  // Add new habit
  const addHabit = async (habit) => {
    // Check if habit already exists
    if (myHabits.some((item) => item._id === habit._id)) {
      return;
    }
    try {
      const HABIT_URL = `${API_URL}/user/${user.id}/myhabits/${habit._id}`;
      const response = await fetch(HABIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setUser({ ...user, habits: [...user.habits, habit._id] });
        setMyHabits([...myHabits, habit]);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Remove a habit
  const removeHabit = async (id) => {
    try {
      const HABIT_DEL_URL = `${API_URL}/user/${user.id}/myhabits/${id}`;
      const response = await fetch(HABIT_DEL_URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setUser({
          ...user,
          habits: user.habits.filter((habitId) => habitId !== id),
        });
        setMyHabits(myHabits.filter((habit) => habit._id !== id));
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <Weekbar />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        color="text.secondary"
        sx={{ textAlign: "center", mt: 3 }}
      >
        {myHabits.length ? "Today's habits" : "You're not tracking any habits"}
      </Typography>
      {/* Add habits form */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {!showHabitForm && (
          <Button
            size="large"
            variant="outlined"
            onClick={toggleForm}
            sx={{ mt: 3 }}
          >
            Track habit
          </Button>
        )}
        {showHabitForm && (
          <UserHabitForm
            toggleForm={toggleForm}
            categories={categories}
            onAdd={addHabit}
            onRemove={removeHabit}
            habits={habits}
            myHabits={myHabits}
          />
        )}
      </Box>
      {/* Main Grid */}
      <Grid container spacing={3}>
        <Grid item>
          <Grid
            container
            sx={{ mt: 3 }}
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {myHabits.map((habit, index) => (
              <Grid key={index} item sx={{ width: "320px" }}>
                <HabitCard habit={habit} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
