import mongoose from "mongoose";

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;
