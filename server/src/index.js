import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import router from "./routes/rotues.js";
import { PrismaClient } from "@prisma/client";
config();

const app = express();
export const prisma = new PrismaClient();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);
app.use(cookieParser());
app.use("/api/v1", router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server started at ${port}`));
