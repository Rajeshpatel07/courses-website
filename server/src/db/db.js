import { prisma } from "../index.js";

export const getUser = async (email) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user ? user : null;
};

export const newUser = async (username, email, password, role) => {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
      role,
    },
    select: {
      id: true,
    },
  });

  return user ? user : null;
};

export const newBlog = async (
  title,
  content,
  scheduledAt,
  userId,
  published,
  image,
  desc,
) => {
  const blog = await prisma.blog.create({
    data: {
      title,
      content,
      scheduledAt: scheduledAt || null,
      userId,
      published,
      image,
      desc,
    },
    select: {
      id: true,
    },
  });
  return blog ? blog : null;
};

export const newCourse = async (
  title,
  description,
  price,
  discountedPrice,
  image,
) => {
  const course = await prisma.course.create({
    data: {
      title,
      description,
      image,
      price,
      discountedPrice: discountedPrice || price,
    },
  });
  return course ? course : null;
};

export const getAllCourses = async () => {
  const courses = await prisma.course.findMany();
  return courses ? courses : null;
};

export const getBlog = async (blogId) => {
  const blog = await prisma.blog.findFirst({
    where: { id: blogId, published: true },
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
    where: { published: true },
    select: {
      id: true,
      title: true,
      createdAt: true,
      image: true,
      desc: true,
      Author: {
        select: {
          id: true,
          username: true,
          image: true,
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

export const publishSheduledBlog = async (id) => {
  const blog = await prisma.blog.update({
    where: { id },
    data: { published: true },
  });
  return blog;
};
