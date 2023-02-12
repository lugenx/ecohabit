import React, { useState, useEffect } from "react";
import HabitCard from "../components/HabitCard/HabitCard";

const Homepage = () => {
  const [habits, setHabits] = useState([]);

  /* TEMPORARY: Move to separate with other requests when implementing state management */
  const API_URL = process.env.REACT_APP_API_URL;
  const TOKEN = process.env.REACT_APP_TOKEN;

  const getAllHabits = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    const response = await fetch(API_URL + "/habit", config);
    const data = await response.json();
    setHabits(data);
    console.log(data);
  };
  ////////////////////////////////////

  useEffect(() => {
    getAllHabits();
  }, [habits]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      {habits.map((habit) => (
        <HabitCard key={habit._id} habit={habit} />
      ))}
    </div>
  );
};

export default Homepage;
