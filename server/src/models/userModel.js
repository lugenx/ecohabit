import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      validate: {
        validator: validateEmail,
        message: () => "Email address already registered.",
      },
      required: [true, "User email required"],
    },
    postalCode: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      required: false,
    },
    // Represents habits chosen by the user, distinct from the Habit model which represents all available habits
    habits: [
      {
        type: Schema.Types.ObjectId,
        ref: "Habit",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

async function validateEmail(email) {
  if (this.isModified("email")) {
    const user = await User.findOne({ email });
    if (user) {
      if (this._id.equals(user._id)) {
        return true;
      }
      return false;
    }
  }
  return true;
}
