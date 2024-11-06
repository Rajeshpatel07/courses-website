import cron from "node-cron";
import { updateBlogPublishStatus } from "../db/db.js";

cron.schedule("*/5 * * * *", async () => {
  const now = new Date();
  try {
    const scheduledBlogs = await db.blog.findMany({
      where: { scheduledAt: { lte: now }, published: false },
    });
    scheduledBlogs.forEach(async (blog) => {
      await updateBlogPublishStatus(blog.id, true);
    });
  } catch (err) {
    console.error("Error updating blog status:", err);
  }
});
