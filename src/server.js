import http from "http";
import app from "../src/app.js"
import { PORT } from "../src/config/env.js"
import { connectDb } from "./config/database.js";

const server = http.createServer(app);

const startServer = async () => {
    try {
        await connectDb();
        server.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    } catch (error) {
        process.exit(1);
    }
}

startServer();