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
    //send 500 Internal Server Error status code for userLogin fail
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
    //send 500 Internal Server Error status code for userSignUp fail
    res.status(500).json({ error: err.message });
  }
};

// Get user data
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Check if user exists
    //send 500 Internal Server Error status code for getMe fail
    if (!user) return res.status(500).json({ msg: "Unable to find the user" });

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
    //send 401 Unauthorized status code for getMe fail(user not found)
    res.status(401).json({ error: err.message });
  }
};

// Update user data
const updateMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Check if user exists
    //send 401 Unauthorized status code for updateMe fail(user not found)
    if (!user) return res.status(401).json({ msg: "User does not exist" });

    const { _id, name, email, postalCode, roles } = await User.findOneAndUpdate(
      { _id: user.id },
      { ...req.body },
      { new: true }
    );

    //send 201 Created status code for updateMe success
    res.status(201).json({
      id: _id,
      name,
      email,
      postalCode,
      roles,
    });
  } catch (err) {
    //send 500 Internal Server Error status code for updateMe fail
    res.status(500).json({ error: err.message });
  }
};

// Delete a user
const deleteMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Check if user exists
    //send 401 Unauthorized status code for deleteMe fail(user not found)
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
    //send 500 Internal Server Error status code for deleteMe fail
    res.status(500).json({ error: err.message });
  }
};

export { userLogin, userSignUp, getMe, updateMe, deleteMe };
