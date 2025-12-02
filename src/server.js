import http from "http";
import app from "../src/app.js"
import { PORT } from "../src/config/env.js"

const server = http.createServer(app);

const startServer = () => {
    try {
        server.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    } catch (error) {
        process.exit(1);
    }
}

startServer();