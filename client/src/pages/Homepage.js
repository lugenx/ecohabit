import React, { useState, useEffect } from "react";
import { Grid, Box, Button } from "@mui/material";
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
  const { user } = useUserContext();
  // User specific habits
  const [myHabits, setMyHabits] = useState([]);
  const [showHabitForm, setShowHabitForm] = useState(false);
  const { loginPending, loggedIn, setLoggedIn } = useLoginContext();
  const navigate = useNavigate();

  // Store categories in an array
  const habitCategories = habits.map((habit) => habit.category);
  // Remove duplicate categories from array
  const categories = [...new Set(habitCategories)];

  /* TEMPORARY: Move to separate folder with other requests when implementing state management */
  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");

  // getting user specific habits from backend
  const getMyHabits = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `${API_URL}/user/${user.id}/userHabit`,
        config
      );
      const data = await response.json();
      setMyHabits(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn && user !== undefined && token !== undefined) {
      getMyHabits();
    }
  }, [user]);

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
    setHabits(data);
  };

  useEffect(() => {
    getAllHabits();
  }, []);

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
      {/* Main Grid */}
      <Grid container spacing={3}>
        {/* Left inner grid */}
        <Grid item xs={12} sm={4}>
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
                Add a Habit
              </Button>
            )}
            {showHabitForm && (
              <UserHabitForm
                toggleForm={toggleForm}
                categories={categories}
                onAdd={addHabit}
                habits={habits}
                myHabits={myHabits}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          {/* Right inner grid */}
          <Grid
            container
            sx={{ mt: 3 }}
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {myHabits.map((habit, index) => (
              <Grid key={index} item>
                <HabitCard habit={habit} removeHabit={removeHabit} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
