import mongoose from "mongoose";
import Answer from "../models/answerModel.js";

const createAnswer = async (req, res) => {
  try {
    // authorize ownership of answer
    if (req.user.id !== req.body.user) {
      return res.status(403).json({ error: "Access denied" });
    }

    const answer = await Answer.create({
      answer: req.body.answer,
      user: req.user.id,
      habit: req.body.habit,
    });

    res.status(201).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAnswer = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Bad Request" });
    }

    const answer = await Answer.findById(id);

    if (!answer) {
      return res.status(404).json({ error: "answer not found" });
    }

    // authorize ownership of answer
    if (req.user.id !== answer.user._id.toString()) {
      return res.status(403).json({ error: "Access denied" });
    }

    res.status(200).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateAnswer = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Bad Request" });
    }

    let answer = await Answer.findById(id);

    // authorize ownership of answer
    if (req.user.id !== answer.user._id.toString()) {
      return res.status(403).json({ error: "Access denied" });
    }

    if (!answer) {
      return res.status(404).json({ error: "answer not found" });
    }

    answer = await Answer.findOneAndUpdate({ _id: id }, { ...req.body });

    res.status(201).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteAnswer = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Bad Request" });
    }

    let answer = await Answer.findById(id);

    // authorize ownership of answer
    if (req.user.id !== answer.user._id.toString()) {
      return res.status(403).json({ error: "Access denied" });
    }

    if (!answer) {
      return res.status(404).json({ error: "answer not found" });
    }
    await Answer.findOneAndDelete({ _id: id });
    res.status(200).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserAnswers = async (req, res) => {
  // Check if the user is authenticated
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized User" });
  }

  try {
    const userId = req.user.id;

    const { date } = req.query;
    //If date parameter is provided then user's answer of that particular date will be returned
    if (date) {
      // Find all answers for the specified date and user ID
      const answers = await Answer.find({
        user: userId,
        createdAt: {
          $gte: new Date(date),
          $lt: new Date(date + "T23:59:59"),
        },
      });
      
      return res.status(200).json(answers);
    }

    // Find all answers for the authenticated user
    const answers = await Answer.find({ user: userId });

    res.status(200).json(answers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { createAnswer, getAnswer, updateAnswer, deleteAnswer, getUserAnswers };
