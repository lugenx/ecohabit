import mongoose from "mongoose";

const Schema = mongoose.Schema;

const habitSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answerOptions: {
    type: [String],
    required: false,
  },
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
