const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User already exists!");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check if user exists or not
  const findUser = await User.findOne({ email });

  if (findUser && findUser.isPasswordMatched(password)) {
    res.json(findUser);
  } else {
    throw new Error("Invalid credentials!");
  }
});

module.exports = { createUser, loginUser };
