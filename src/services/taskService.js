import Task from "../models/task.js";
import { generateUniqueId } from "../utils/generateUniqueId.js";

const createTask = async ({ title, priority, dueDate }) => {
    try {
        const taskId = await generateUniqueId(Task, "taskId");

        const task = await Task.create({ taskId, title, priority, dueDate });

        return task;
    } catch (error) {
        throw error;
    }
}

export default { createTask };