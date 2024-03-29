import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useUserContext } from "../contexts/UserContext";
const API_URL = process.env.REACT_APP_API_URL;

const HabitCard = ({ habit, fetchAnswers }) => {
  const [answer, setAnswer] = useState(null);

  let habitCategory = habit.category.toLowerCase();
  const { user, token } = useUserContext();
  // select an answer from habit options
  const createAnswer = async (selectedOption) => {
    try {
      const URL = `${API_URL}/answer`;
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          answer: selectedOption,
          user: user.id,
          habit: habit._id,
        }),
      });
      if (response.ok) {
        const responseAnswer = await response.json();
        setAnswer(responseAnswer);
        fetchAnswers();

        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeAnswer = async (id) => {
    try {
      const URL = `${API_URL}/answer/${id}`;
      const response = await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setAnswer(null);
        fetchAnswers();
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  // TODO: Lift this up, or move this to the context to use to render parent component
  const toggleAnswer = (opt) => {
    if (!answer) {
      createAnswer(opt);
    } else {
      removeAnswer(answer._id);
    }
  };

  // TODO: This is not efficient way to fetch inside each habit card, fetching will be moved to parent (Homepage) component.
  useEffect(() => {
    const getTodaysAnswers = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        const response = await fetch(`${API_URL}/answer?date=${today}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const todaysAnswers = await response.json();
        const todaysAnswer = await todaysAnswers.find(
          (answer) => habit._id === answer.habit
        );
        setAnswer(todaysAnswer);
      } catch (err) {
        console.log(err);
      }
    };
    getTodaysAnswers();
  }, [habit]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "6px 0 6px 0",
          }}
        >
          <Typography variant="h5" component="div">
            {habit.category}
          </Typography>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            <CardMedia
              component="img"
              height={60}
              sx={{ objectFit: "contain" }}
              image={`/images/${habitCategory}.svg`}
              alt={habitCategory}
              title={habitCategory}
            />
          </Box>
        </Box>
        <hr></hr>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingTop: "6px" }}
        >
          {habit.question}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {habit.answerOptions.map((option, index) => (
          <Button
            disabled={answer && answer.answer !== option}
            size="small"
            key={index}
            onClick={() => {
              toggleAnswer(option);
            }}
          >
            {option}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default HabitCard;
