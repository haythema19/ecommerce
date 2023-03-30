const express = require("express");
const {
  createUser,
  loginUser,
  getOneUser,
  getAllUser,
  deleteUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
} = require("../controller/userController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.get("/login", loginUser);
router.get("/refresh", handleRefreshToken);

router.get("/all-users", getAllUser);
router.get("/:id", authMiddleware, isAdmin, getOneUser);

router.put("/password", authMiddleware, updatePassword);

router.put("/update/:id", updatedUser);
router.delete("/delete/:id", deleteUser);

router.put("/block/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock/:id", authMiddleware, isAdmin, unblockUser);

router.get("/logout", logout);

module.exports = router;
