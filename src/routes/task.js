import { Router } from "express"
import { inputValidator } from "../middlewares/inputValidator.js";
import taskSchema from "../schemas/taskSchema.js";
import { createTask } from "../contollers/task.js";

const taskRoutes = Router();

taskRoutes.post("/", inputValidator(taskSchema.createTask), createTask);

export { taskRoutes }