import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";

//TODO: improve code below with validations

// Authenticate a user
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the email
    const isValidEmail = validator.isEmail(email);
    if (!isValidEmail) {
      return res.status(400).json({ error: "Invalid email." });
    }

    const user = await User.findOne({ email: email });
    if (!user) return res.status(403).json({ msg: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    user.password = undefined;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Register a new user
const userSignUp = async (req, res) => {
  const { name, email, postalCode, password, roles } = req.body;

  // Validate the email
  const isValidEmail = validator.isEmail(email);
  if (!isValidEmail) {
    return res.status(400).json({ error: "Invalid email." });
  }

  // Validate the password
  const isValidPassword = validator.isStrongPassword(password, {
    minLength: 8,
    minNumbers: 1,
    minSymbols: 1,
    minLowercase: 0,
    minUppercase: 0,
  });

  if (!isValidPassword) {
    return res.status(400).json({
      error:
        "Password not strong enough. A strong password is minimum 8 characters long containing at least 1 number and 1 special character.",
    });
  }

  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      postalCode,
      password: passwordHash,
      roles,
    });
    const savedUser = await newUser.save();
    savedUser.password = undefined;
    res.status(201).json(savedUser);
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ error: errors.join(", ") });
    } else if (err.code === 11000) {
      return res.status(400).json({ error: "Email is already registered." });
    } else {
      return res.status(500).json({ error: "Server Error" });
    }
  }
};

// Get user data
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Check if user exists
    if (!user) return res.status(401).json({ msg: "User does not exist" });

    const { _id, name, email, postalCode, roles } = await User.findById(
      user.id
    );

    res.status(200).json({
      id: _id,
      name,
      email,
      postalCode,
      roles,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user data
const updateMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Check if user exists
    if (!user) return res.status(401).json({ msg: "User does not exist" });

    const { _id, name, email, postalCode, roles } = await User.findOneAndUpdate(
      { _id: user.id },
      { ...req.body },
      { new: true }
    );

    res.status(201).json({
      id: _id,
      name,
      email,
      postalCode,
      roles,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a user
const deleteMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Check if user exists
    if (!user) return res.status(401).json({ msg: "User does not exist" });

    const { _id, name, email, postalCode, roles } =
      await User.findByIdAndDelete(user.id);

    res.status(200).json({
      id: _id,
      name,
      email,
      postalCode,
      roles,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { userLogin, userSignUp, getMe, updateMe, deleteMe };
