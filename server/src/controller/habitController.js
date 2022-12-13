import mongoose from "mongoose";
import Habit from "../models/habitModel.js";

const createHabit = async (req, res) => {
  const category = req.body.category;
  const description = req.body.description;
  const question = req.body.question;
  const answerOptions = req.body.answerOptions;

  try {
    const habit = await Habit.create({
      category,
      description,
      question,
      answerOptions,
    });

    res.status(200).json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getHabit = async (req, res) => {
  const id = req.params.id;

  //check if string format is correct
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "habit not found, invalid request" });
  }

  const habit = await Habit.findById(id);

  //check if habit exist in db
  if (!habit) {
    return res.status(404).json({ error: "habit not found" });
  }

  res.status(200).json(habit);
};

const updateHabit = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "habit not found, invalid request" });
  }

  const habit = await Habit.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!habit) {
    return res.status(404).json({ error: "habit not found" });
  }

  res.status(200).json(habit);
};

const deleteHabit = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "habit not found, invalid request" });
  }

  const habit = await Habit.findOneAndDelete({ _id: id });

  if (!habit) {
    return res.status(404).json({ error: "habit not found" });
  }

  res.status(200).json(habit);
};

export { createHabit, getHabit, updateHabit, deleteHabit };
