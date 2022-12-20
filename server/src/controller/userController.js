import User from "../models/userModel.js";

//TODO: improve code below with validations
const userLogin = async (req, res) => {
  res.json({ userLoginTest: "yeah" });
};

const userSignUp = async (req, res) => {
  const { name, email, postalCode, password, roles } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      postalCode,
      password,
      roles,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { userLogin, userSignUp };
