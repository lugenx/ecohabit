import mongoose from "mongoose";
import Habit from "../models/habitModel.js";

const createHabit = async (req, res) => {
  const { category, description, question, answerOptions } = req.body;

  try {
    const habit = await Habit.create({
      category,
      description,
      question,
      answerOptions,
    });

    res.status(201).json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();

    res.status(200).json(habits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHabit = async (req, res) => {
  const id = req.params.id;

  try {
    //check if string format is correct
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Bad Request" });
    }

    const habit = await Habit.findById(id);

    //check if habit exist in db
    if (!habit) {
      return res.status(404).json({ error: "habit not found" });
    }

    res.status(200).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateHabit = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Bad Request" });
    }

    const habit = await Habit.findOneAndUpdate({ _id: id }, { ...req.body });

    if (!habit) {
      return res.status(404).json({ error: "habit not found" });
    }
    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteHabit = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ error: "Bad Request" });
    }

    const habit = await Habit.findOneAndDelete({ _id: id });

    if (!habit) {
      return res.status(404).json({ error: "habit not found" });
    }

    res.status(200).json(habit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createHabit, getAllHabits, getHabit, updateHabit, deleteHabit };
