import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "server is up and running"
    });
});

export default app;