const express = require("express");
const {
  createUser,
  loginUser,
  getAllUser,
  getOneUser,
  deleteUser,
  updateUser,
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
router.get("/login", loginUser);

router.put("/password", authMiddleware, updatePassword);
router.get("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/", resetPassword);

router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

router.get("/:id", authMiddleware, isAdmin, getOneUser);
router.get("/all-users", getAllUser);

router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete/:id", deleteUser);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
