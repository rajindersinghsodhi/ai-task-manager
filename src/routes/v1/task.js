import { Router } from "express"
import { inputValidator } from "../../middlewares/inputValidator.js";
import taskSchema from "../../schemas/taskSchema.js";
import { createTask, parseSpeechToTask, getTasks, getTask, updateTask, deleteTask } from "../../contollers/v1/taskController.js";
import { authMiddleWare } from "../../middlewares/auth.js";

const taskRoutes = Router();

taskRoutes.post("/", inputValidator(taskSchema.createTask), authMiddleWare, createTask);

taskRoutes.post("/voice", authMiddleWare, parseSpeechToTask);

taskRoutes.get("/",  authMiddleWare, getTasks);

taskRoutes.get("/:taskId", authMiddleWare, getTask);

taskRoutes.patch("/", inputValidator(taskSchema.updateTask), authMiddleWare, updateTask);

taskRoutes.delete("/:taskId", authMiddleWare, deleteTask);

export { taskRoutes }