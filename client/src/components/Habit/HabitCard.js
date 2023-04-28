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

export default function MediaCard({ habit, removeHabit }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        // sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {habit.category}
          </Typography>
          <Button
            onClick={() => removeHabit(habit._id)}
            sx={{
              color: "#05c46b",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            &times;
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {habit.description}
        </Typography>
        <hr></hr>
        <Typography variant="body2" color="text.secondary">
          {habit.question}
        </Typography>
      </CardContent>
      <CardActions>
        {habit.answerOptions.map((option, index) => (
          <Button size="small" key={index}>
            {option}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
}
