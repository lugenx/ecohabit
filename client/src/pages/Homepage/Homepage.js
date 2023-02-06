import React, { useState, useEffect } from "react";
import Recycle from "../../components/Recycle/Recycle";
import HabitCard from "../../components/HabitCard/HabitCard";

const Homepage = () => {
  const [habits, setHabits] = useState([]);

  // Should move this when implementing redux into features folder
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
  }, []);

  return (
    <div>
      <Recycle />
      {habits.map((habit) => (
        <HabitCard key={habit._id} habit={habit} />
      ))}
    </div>
  );
};

export default Homepage;
