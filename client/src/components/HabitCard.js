import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
} from "@mui/material";

const HabitCard = ({ habit }) => {
  let habitCategory = habit.category.toLowerCase();

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
          <Button size="small" key={index}>
            {option}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default HabitCard;
