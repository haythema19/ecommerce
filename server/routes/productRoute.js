const express = require("express");

const {
  createProduct,
  getOneProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/get-product/:id", getOneProduct);
router.get("/all-product", getAllProduct);

router.put("/update/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/delete/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
