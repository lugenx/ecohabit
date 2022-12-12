import mongoose from "mongoose";

const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;
