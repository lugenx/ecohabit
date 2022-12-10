import Habit from "../models/habitModel.js";

const createHabit = async (req, res) => {
  const habitName = req.body.habitName;
  const user = req.body.user;

  try {
    const habit = await Habit.create({
      habitName,
      user,
    });

    res.status(200).json(habit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getHabit = async (req, res) => {
  const id = req.params.id;
  const habit = await Habit.findById(id);
  res.status(200).json(habit);
};

const updateHabit = async (req, res) => {
  const id = req.params.id;
  const habit = await Habit.findOneAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(habit);
};

const deleteHabit = async (req, res) => {
  const id = req.params.id;
  const habit = await Habit.findOneAndDelete({ _id: id });
  res.status(200).json(habit);
};

export { createHabit, getHabit, updateHabit, deleteHabit };
