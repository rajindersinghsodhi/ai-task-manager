import express from "express";
import { taskRoutes } from "./routes/task.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "server is up and running"
    });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "ai-task-manager running normally",
    version: "1.0.0",
    uptime_seconds: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/v1/tasks", taskRoutes);

export default app;