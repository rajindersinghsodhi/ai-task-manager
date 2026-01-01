import taskService from "../../services/taskService.js";

const createTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const task = await taskService.createTask({ userId, ...req.body });

        return res.status(200).json({
            status: "success",
            message: "task created successfully",
            task
        });
    } catch (error) {
        next(error);
    }
}

const getTasks = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tasksTodo, tasksDone } = await taskService.getTasks(userId);

    res.status(200).json({
        status: "success",
        message: "tasks fetched successfully",
        tasksTodo, 
        tasksDone
    });
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { taskId } = req.params;

    const task = await taskService.getTask({ userId, taskId });

    res.status(200).json({
        status: "success",
        message: "task fetched successfully",
        task
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { taskId, updates } = req.body;

    const task = await taskService.updateTask({ userId, taskId, updates });

    res.status(200).json({
        status: "success",
        message: "task updated successfully",
        task
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { taskId } = req.params;

    await taskService.deleteTask({ userId, taskId });

    res.status(200).json({
        status: "success",
        message: "task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

const parseSpeechToTask = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { speechText } = req.body;

        const taskPayload = await taskService.parseSpeechText(speechText); 

        return res.status(200).json({
          status: "success",
          message: "speech text parsed successfully",
          taskPayload
        });      
    } catch (error) {
        next(error);
    }
}

export { createTask, getTasks, getTask, updateTask, deleteTask, parseSpeechToTask };