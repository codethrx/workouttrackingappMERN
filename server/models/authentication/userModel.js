const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const { jwtGenerator } = require("../../utils/jwt");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);
//statics
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields must be filled.");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Email is badly formatted.");
  }
  //   if (!validator.isStrongPassword(password)) {
  //     throw new Error("Password is not strong enough.");
  //   }
  //user already exists
  const userExists = await this.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }
  //creating a new user
  //salt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //creating a new user
  const newUser = await this.create({ email, password: hashedPassword });
  return { token: jwtGenerator(newUser._id), email: newUser.email };
};

userSchema.statics.login = async function (email, password) {
  const userExist = await this.findOne({ email });
  if (!userExist) {
    throw new Error("User with this email doesnot exist");
  }

  const compareExpression = await bcrypt.compare(password, userExist.password);

  if (!compareExpression) {
    throw new Error("User password is not corre");
  }
  return {
    token: jwtGenerator({ _id: userExist._id, email: userExist.email }),
  };
};
module.exports = mongoose.model("User", userSchema);
