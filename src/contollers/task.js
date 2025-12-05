import taskService from "../services/taskService.js";

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);

        return res.status(200).json({
            status: "success",
            message: "created task successfully",
            task
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
}

const getTasks = async (req, res) => {
  try {
    const { tasksTodo, tasksDone } = await taskService.getTasks();

    res.status(200).json({
        status: "success",
        message: "task fetched successfully",
        tasksTodo, 
        tasksDone
    });
  } catch (error) {
    res.status(500).json({
        status: "error",
        message: error.message,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await taskService.getTask(taskId);

    res.status(200).json({
        status: "success",
        message: "task fetched successfully",
        task
    });
  } catch (error) {
    res.status(500).json({
        status: "error",
        message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const task = await taskService.updateTask(taskId, req.body);

    res.status(200).json({
        status: "success",
        message: "task updated successfully",
        task
    });
  } catch (error) {
    res.status(500).json({
        status: "error",
        message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    await taskService.deleteTask(taskId);

    res.status(200).json({
        status: "success",
        message: "task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
        status: "error",
        message: error.message,
    });
  }
};

const parseSpeechToTask = async (req, res) => {
    try {
        const { speechText } = req.body;

        console.log(speechText)

        const taskPayload = await taskService.parseSpeechText(speechText); 

        return res.status(200).json({
          status: "success",
          message: "speech text parsed successfully",
          taskPayload
        });      
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

export { createTask, getTasks, getTask, updateTask, deleteTask, parseSpeechToTask };