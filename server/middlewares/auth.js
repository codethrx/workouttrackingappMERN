const User = require("../models/authentication/userModel");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ error: "User not authorized" });
  }
  const token = authorization.split(" ")[1];
  try {
    const {
      data: { _id },
    } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("-password");
    console.log(req.user);
    next();
  } catch (e) {
    res.status(400).json({ error: e.message || `User not authorized` });
  }
};
module.exports = auth;
