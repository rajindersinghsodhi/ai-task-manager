import express from "express";
import cors from "cors";
import { taskRoutes } from "./routes/v1/task.js";
import { ALLOWED_ORIGINS } from "./config/env.js";
import authenticationRoutes from "./routes/v1/authentication.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "voice enabled task tracker service up and running"
    });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "voice enabled task tracker service up and running",
    version: "1.0.0",
    uptime_seconds: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/auth", authenticationRoutes);

export default app;