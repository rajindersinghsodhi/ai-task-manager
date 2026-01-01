import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    taskId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, enum: ['high', 'low'], required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ["todo", "done"], default: "todo" }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;