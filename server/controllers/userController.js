import asyncHandler from "express-async-handler";

// @desc Auth user/set token
// @route POST /api/users/auth
// @access public
export const authUser = asyncHandler((req, res) => {
  res.status(200).json({ message: "Auth User" });
});
