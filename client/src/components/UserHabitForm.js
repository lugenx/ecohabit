import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const UserHabitForm = ({ toggleForm, onAdd, categories, habits, myHabits }) => {
  // Checks if habit exists in myHabits array
  const inMyHabits = (id) => {
    return myHabits.some((item) => item._id === id);
  };
  return (
    <Box>
      <Card sx={{ padding: "1.5rem" }}>
        <CardContent>
          {categories.map((category, index) => (
            <Box key={index}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#05c46b"
              >
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
                        onClick={() => onAdd(habit)}
                        sx={{
                          color: inMyHabits(habit._id)
                            ? "text.secondary"
                            : "#05c46b",
                          cursor: "pointer",
                          fontSize: "24px",
                          disabled: inMyHabits(habit._id),
                        }}
                      >
                        +
                      </Button>
                    </Box>
                  );
                } else {
                  return null;
                }
              })}
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Button size="medium" variant="outlined" onClick={toggleForm}>
              Cancel
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserHabitForm;
