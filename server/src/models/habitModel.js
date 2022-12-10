import mongoose from "mongoose";

const Schema = mongoose.Schema;

const habitSchema = new Schema({
  habitName: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
