import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HabitCard from "../components/HabitCard/HabitCard";

const Homepage = () => {
  const [habits, setHabits] = useState([]);

  /* TEMPORARY: Move to separate folder with other requests when implementing state management */
  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");

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
  //

  useEffect(() => {
    getAllHabits();
  }, []);

  return (
    <Grid
      container
      sx={{ mt: 5 }}
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {habits.map((habit) => (
        <Grid key={habit._id} item>
          <HabitCard habit={habit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Homepage;
