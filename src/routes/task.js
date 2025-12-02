import { Router } from "express"
import { inputValidator } from "../middlewares/inputValidator.js";
import taskSchema from "../schemas/taskSchema.js";
import { createTask, deleteTask, getTask, updateTask } from "../contollers/task.js";

const taskRoutes = Router();

taskRoutes.post("/", inputValidator(taskSchema.createTask), createTask);

taskRoutes.get("/:taskId", getTask);

taskRoutes.patch("/:taskId", inputValidator(taskSchema.updateTask), updateTask);

taskRoutes.delete("/:taskId", deleteTask);

export { taskRoutes }