const jwt = require("jsonwebtoken");
const jwtGenerator = (payload) =>
  jwt.sign({ data: payload }, process.env.SECRET, { expiresIn: "5d" });
module.exports = { jwtGenerator };
