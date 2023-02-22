import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function MediaCard({ habit }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        // sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {habit.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {habit.description}
        </Typography>
        <hr></hr>
        <Typography variant="body2" color="text.secondary">
          {habit.question}
        </Typography>
      </CardContent>
      <CardActions>
        {habit.answerOptions.map((option) => (
          <Button size="small">{option}</Button>
        ))}
      </CardActions>
    </Card>
  );
}
