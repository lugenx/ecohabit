import User from "../models/userModel.js";

//TODO: improve code below with validations
const userLogin = async (req, res) => {
  res.json({ userLoginTest: "yeah" });
};

const userSignUp = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  try {
    const user = await User.create({
      name,
      email,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export { userLogin, userSignUp };
