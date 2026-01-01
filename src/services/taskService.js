import Task from "../models/task.js";
import { generateUniqueId } from "../utils/generateUniqueId.js";
import taskParserService from "./ai/speechParser.js";

const createTask = async ({ userId, title, description, priority, dueDate }) => {
    try {
        const taskId = await generateUniqueId(Task, "taskId");

        const task = await Task.create({ userId, taskId, title, description, priority, dueDate });
        
        return task;
    } catch (error) {
        throw error;
    }
}

const getTasks = async (userId) => {
  try {
    const tasks = await Task.find({ userId });

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

const getTask = async ({ userId, taskId }) => {
  try {
    const task = await Task.findOne({ userId, taskId });

    if(!task){
        throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    throw error;
  }
}

const updateTask = async ({ userId, taskId, updates }) => {
  try {
    if(!Object.keys(updates).length) {
        throw new Error("no fields provided to update");
    }

    const task = await Task.findOneAndUpdate({ userId, taskId }, { $set: updates }, { new: true });

    if(!task) {
        throw new Error("Task not found");
    }

    return task;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async ({ userId, taskId }) => {
  try {
    const res = await Task.deleteOne({ userId, taskId });

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