import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const UserHabitForm = ({
  toggleForm,
  onAdd,
  onRemove,
  categories,
  habits,
  myHabits,
}) => {
  // Checks if habit exists in myHabits array
  const inMyHabits = (id) => {
    return myHabits.some((item) => item._id === id);
  };

  // Determine to add or remove
  const habitHandler = (habit) => {
    if (inMyHabits(habit._id)) {
      onRemove(habit._id);
    } else {
      onAdd(habit);
    }
  };

  // Ensures modal stays open when inside the form clicked
  const handleFormClick = (event) => {
    // Prevent the event from propagating to the outer Box
    event.stopPropagation();
  };

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent overlay
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999, // Higher z-index to be above other content
        }}
        onClick={toggleForm}
      >
        <Card sx={{ padding: "0.5rem" }} onClick={handleFormClick}>
          <CardContent>
            {categories.map((category, index) => (
              <Box key={index}>
                <Typography variant="h5" component="div" color="#05c46b">
                  {category}
                </Typography>
                {habits.map((habit) => {
                  if (habit.category === category) {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        key={habit._id}
                      >
                        <Typography variant="body1" color="text.secondary">
                          {habit.description}
                        </Typography>
                        <Button
                          onClick={() => habitHandler(habit)}
                          sx={{
                            color: inMyHabits(habit._id)
                              ? "text.secondary"
                              : "#05c46b",
                            cursor: "pointer",
                            fontSize: "24px",
                          }}
                        >
                          {inMyHabits(habit._id) ? "-" : "+"}
                        </Button>
                      </Box>
                    );
                  } else {
                    return null;
                  }
                })}
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserHabitForm;
