const express = require("express");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImage");

const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlog,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controller/blogController");

const router = express.Router();

router.post("/create", authMiddleware, isAdmin, createBlog);
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);

router.put(
  "/update/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages
);

router.get("/", getAllBlog);
router.get("/:id", getBlog);

router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);

router.delete("/delete/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
