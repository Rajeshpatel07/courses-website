import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import router from "./routes/rotues.js";
import { PrismaClient } from "@prisma/client";
config();

const app = express();
export const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // corrected from "Credential" to "credentials"
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started at ${port}`));
