import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import {
  getAllBlogs,
  getAllCourses,
  getCourse,
  getBlog,
  getUser,
  newBlog,
  newCourse,
  newUser,
  publishSheduledBlog,
} from "../db/db.js";
import { scheduleOneTimeTask } from "../services/schedule.js";

export const home = (req, res) => {
  return res.status(200).json({ message: "check OK" });
};

export const signup = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ err: "All fields are mandatory" });

  try {
    const userExist = await getUser(email);
    if (userExist) {
      return res.status(400).json({ err: "user already exist on this email" });
    }
    const hashpass = await hash(password, 10);
    const user = await newUser(username, email, hashpass, role);
    if (!user) {
      return res.status(500).json({ err: "error while createing user" });
    }
    return res
      .status(201)
      .json({ message: "signup successful", userId: newUser.id });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ err: "All fields are mandatory" });

  try {
    const user = await getUser(email);
    if (!user) return res.status(400).json({ err: "User not found" });

    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Incorrect password" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.ACCESS_SECRET,
    );

    const cookieName = user.role === "admin" ? "adminAcToken" : "acToken";
    res.cookie(cookieName, token, { maxAge: 1000 * 60 * 60 * 24 });

    return res
      .status(200)
      .json({ message: "Login successful", userId: user.id, role: user.role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ err: "Server error" });
  }
};

export const createBlog = async (req, res) => {
  const { title, content, scheduledAt, userId, published, image, desc } =
    req.body;
  if (!title || !content || !image || !desc) {
    return res.status(400).json({ err: "Title and content are required" });
  }

  try {
    const date = scheduledAt ? scheduledAt.date : null;
    const blog = await newBlog(
      title,
      content,
      date,
      userId,
      published,
      image,
      desc,
    );
    if (scheduledAt !== null) {
      scheduleOneTimeTask(scheduledAt, publishSheduledBlog(blog.id));
    }
    if (!blog) {
      return res.status(500).json({ err: "error while crateing blog" });
    }
    return res.status(201).json({ message: "Blog created successfully", blog });
  } catch (err) {
    console.error("Error creating blog:", err);
    return res.status(500).json({ err: "Server error while creating blog" });
  }
};

export const createCourse = async (req, res) => {
  const { title, description, price, discountPrice, imageUrl } = req.body;

  if (!title || !description || !price || !imageUrl) {
    return res
      .status(400)
      .json({ err: "Title, description, price and image are required" });
  }

  try {
    const course = await newCourse(
      title,
      description,
      price,
      discountPrice,
      imageUrl,
    );
    if (!course) {
      return res.status(500).json({ err: "error while creating course" });
    }
    return res
      .status(201)
      .json({ message: "Course created successfully", course });
  } catch (err) {
    console.error("Error creating course:", err);
    return res.status(500).json({ err: "Server error while creating course" });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await getAllBlogs();
    return res.status(200).json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return res.status(500).json({ err: "Server error while fetching blogs" });
  }
};

export const getBlogById = async (req, res) => {
  const { blogId } = req.params;
  if (!blogId) {
    return res.status(400).json({ err: "Blog ID is required" });
  }
  try {
    const blog = await getBlog(blogId);
    if (!blog) {
      return res.status(404).json({ err: "Blog not found" });
    }
    return res.status(200).json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return res.status(500).json({ err: "Server error while fetching blog" });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await getAllCourses();
    return res.status(200).json(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    return res.status(500).json({ err: "Server error while fetching courses" });
  }
};

export const getCourseById = async (req, res) => {
  const { courseId } = req.params;
  if (!courseId) {
    return res.status(400).json({ err: "Course ID is required" });
  }
  try {
    const course = await getCourse(courseId);
    if (!course) {
      return res.status(404).json({ err: "Course not found" });
    }
    return res.status(200).json(course);
  } catch (err) {
    console.error("Error fetching course:", err);
    return res.status(500).json({ err: "Server error while fetching course" });
  }
};
