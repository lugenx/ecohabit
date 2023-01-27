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
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

async function validateEmail(email) {
  const user = await User.findOne({ email });
  if (user) {
    if (User.id === user.id) {
      return true;
    }
    return false;
  }
  return true;
}
