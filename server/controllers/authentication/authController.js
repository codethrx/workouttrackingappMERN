const User = require("../../models/authentication/userModel");
//controllers
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json(user);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
module.exports = { login, signup };
