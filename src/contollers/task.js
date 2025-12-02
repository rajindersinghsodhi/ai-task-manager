import taskService from "../services/taskService.js";

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);

        return res.status(200).json({
            status: "success",
            message: "got your data",
            task
        });
    } catch (error) {
        throw error;
    }
}

export { createTask };