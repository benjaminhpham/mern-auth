import asyncHandler from "express-async-handler";

// @desc Auth user/set token
// @route POST /api/users/auth
// @access public
export const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc Register a new user
// @route POST /api/users
// @access public
export const registerUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Register User" });
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
