import mongoose from "mongoose";
import Habit from "../models/habitModel.js";

// @desc    Add a habit
// @route   POST /habit
// @access  Private
const createHabit = async (req, res) => {
  const { category, description, question, answerOptions } = req.body;

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

// @desc    Get all habits
// @route   GET /habit
// @access  Private
const getAll = async (req, res) => {
  const habits = await Habit.find();

  res.status(200).json(habits);
};

// @desc    Get habit by id
// @route   GET /habit/:id
// @access  Private
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

// @desc    Update habit
// @route   PUT /habit/:id
// @access  Private
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

// @desc    Delete a habit
// @route   DELETE /habit/:id
// @access  Private
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

export { createHabit, getAll, getHabit, updateHabit, deleteHabit };
