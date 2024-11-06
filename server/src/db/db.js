import { prisma } from "../index.js";

export const getUser = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user ? user : null;
};

export const newUser = async (username, email, password) => {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
    select: {
      id: true,
    },
  });

  return user ? user : null;
};

export const newBlog = async (title, content, scheduledAt, userId) => {
  const blog = await prisma.blog.create({
    data: {
      title,
      content,
      scheduledAt: scheduledAt ? new Date(scheduledAt) : null,
      userId,
    },
  });
  return blog ? blog : null;
};

export const newCourse = async (
  title,
  description,
  price,
  discounted_price,
) => {
  const course = await prisma.course.create({
    data: {
      title,
      description,
      price,
      discounted_price: discounted_price || price,
    },
  });
  return course ? course : null;
};

export const getAllCourses = async () => {
  const courses = await prisma.course.findMany();
  return courses ? courses : null;
};

export const getBlog = async (blogId) => {
  const blog = await prisma.blog.findUnique({
    where: { id: blogId },
    include: {
      Author: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
  return blog ? blog : null;
};

export const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    include: {
      Author: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
  return blogs ? blogs : null;
};

export const getCourse = async (courseId) => {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
  });
  return course ? course : null;
};
