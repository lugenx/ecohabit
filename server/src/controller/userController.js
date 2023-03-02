import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//TODO: improve code below with validations

// Authenticate a user
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
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
    res.status(400).json({ error: err.message });
  }
};

// Get user data
const getMe = async (req, res) => {
  try {
    const { _id, name, email, postalCode, roles } = await User.findById(
      req.user.id
    );

    res.status(200).json({
      id: _id,
      name,
      email,
      postalCode,
      roles,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update user data
const updateMe = async (req, res) => {
  try {
    const { _id, name, email, postalCode, roles } = await User.findOneAndUpdate(
      { _id: req.user.id },
      { ...req.body },
      { new: true }
    );

    res.status(200).json({
      id: _id,
      name,
      email,
      postalCode,
      roles,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { userLogin, userSignUp, getMe, updateMe };
