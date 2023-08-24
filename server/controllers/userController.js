import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Auth user/set token
// @route POST /api/users/auth
// @access public
export const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc Register a new user
// @route POST /api/users
// @access public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields required");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

// @desc Logout user
// @route POST /api/users/logout
// @access public
export const logoutUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc Get user profile
// @route GET /api/users/profile
// @access private
export const getUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get User" });
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access private
export const updateUserProfile = asyncHandler((req, res) => {
  res.status(200).json({ message: "Update User" });
});
