import Task from "../models/task.js";
import { generateUniqueId } from "../utils/generateUniqueId.js";
import taskParserService from "./ai/speechParser.js";

const createTask = async ({ title, priority, dueDate }) => {
    try {
        const taskId = await generateUniqueId(Task, "taskId");

        const task = await Task.create({ taskId, title, priority, dueDate });

        return task;
    } catch (error) {
        throw error;
    }
}

const getTasks = async () => {
  try {
    const tasks = await Task.find();

    if(tasks.length === 0){
        throw new Error("Task not found");
    }

    const tasksTodo = tasks.filter((task) => task.status === "todo");
    const tasksDone = tasks.filter((task) => task.status === "done");

    return { tasksTodo, tasksDone };
  } catch (error) {
    throw error;
  }
}

const getTask = async (taskId) => {
  try {
    const task = await Task.findOne({ taskId });

    if(!task){
        throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    throw error;
  }
}

const updateTask = async (taskId, updates) => {
  try {
    if(!Object.keys(updates).length) {
        throw new Error("no fields provided to update");
    }

    const task = await Task.findOneAndUpdate({ taskId }, { $set: updates }, { new: true });

    if(!task) {
        throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (taskId) => {
  try {
    const res = await Task.deleteOne({ taskId });

    if (res.deletedCount === 0) {
      throw new Error("task not found");
    }
  } catch (error) {
    throw error;
  }
}

const parseSpeechText = async (userCommand) => {
  try {
    const taskPayload = await taskParserService.generateTaskObject(userCommand);
    return taskPayload;
  } catch (error) {
    throw error;
  }
}

export default { createTask, getTasks, getTask, updateTask, deleteTask, parseSpeechText };