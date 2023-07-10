import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Card,
  Button,
  CardActions,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  CardContent,
} from "@mui/material";

const AdminHabitForm = ({ toggleForm, onAdd }) => {
  const [habitFormData, setHabitFormData] = useState({
    _id: uuidv4(),
    category: "",
    description: "",
    question: "",
    answerOptions: ["Reusable", "Plastic", "Both", "None"],
  });

  // Destructure habitFormData
  const { category, description, question, answerOptions } = habitFormData;

  // Resets and closes the habit form
  const handleToggle = () => {
    setHabitFormData({
      category: "",
      description: "",
      question: "",
      answerOptions: [],
    });

    toggleForm();
  };

  const onChange = (e) => {
    setHabitFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd(habitFormData);

    handleToggle();
  };

  return (
    <Box
      className="container"
      sx={{
        width: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // Keeps form centered on page
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        //
        zIndex: "1",
      }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 10px 0 10px",
        }}
      >
        <CardContent sx={{ width: "90%" }}>
          <Box component="form" onSubmit={onSubmit}>
            <FormControl fullWidth>
              <InputLabel id="select-label">Category</InputLabel>
              <Select
                labelId="select-label"
                id="category-select"
                variant="filled"
                name="category"
                value={category}
                label="Category"
                onChange={onChange}
              >
                <MenuItem value={"Recycle"}>Recycle</MenuItem>
                <MenuItem value={"Commute"}>Commute</MenuItem>
                <MenuItem value={"Eating"}>Eating</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
              <TextField
                id="filled-basic"
                label="Description"
                variant="filled"
                name="description"
                value={description}
                onChange={onChange}
                autoComplete="off"
              />
              <TextField
                id="filled-basic"
                label="Question"
                variant="filled"
                name="question"
                value={question}
                onChange={onChange}
                autoComplete="off"
              />
            </FormControl>
            <CardActions
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button size="small" type="submit">
                Save Changes
              </Button>
              <Button size="small" onClick={handleToggle}>
                Cancel
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminHabitForm;
