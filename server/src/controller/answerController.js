import Answer from "../models/answerModel.js";

const createAnswer = async (req, res) => {
  try {
    const answer = await Answer.create({
      question: req.body.question,
      answer: req.body.answer,
      date: req.body.date,
      user: req.body.user,
    });

    res.status(200).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAnswer = async (req, res) => {
  const id = req.params.id;
  const answer = await Answer.findById(id);
  res.status(200).json(answer);
};

const updateAnswer = async (req, res) => {
  const id = req.params.id;
  const answer = await Answer.findOneAndUpdate({ _id: id }, { ...req.body });
  res.status(200).json(answer);
};

const deleteAnswer = async (req, res) => {
  const id = req.params.id;
  const answer = await Answer.findOneAndDelete({ _id: id });
  res.status(200).json(answer);
};

export { createAnswer, getAnswer, updateAnswer, deleteAnswer };
