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
      // unique: true,
      lowercase: true,
      validate: {
        validator: async function (email) {
          const user = await this.constructor.findOne({ email });
          if (user) {
            if (this.id === user.id) {
              return true;
            }
            return false;
          }
          return true;
        },
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
