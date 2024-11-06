import { Router } from "express";
import {
  createBlog,
  home,
  login,
  signup,
  createCourse,
  getBlogs,
  getBlogById,
  getCourses,
  getCourseById,
} from "../controllers/controller.js";

const router = Router();

router.get("/home", home);
router.post("/signup", signup);
router.post("/login", login);

router.post("/blogs/new", createBlog);
router.get("/blogs", getBlogs);
router.get("/blogs/:blogId", getBlogById);

router.post("/courses/new", createCourse);
router.get("/courses", getCourses);
router.get("/courses/:courseId", getCourseById);

export default router;