import os from "os";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
const TOTAL_WORKERS = Math.max(1, os.cpus().length - 1);
const GROQ_API_KEY = process.env.GROQ_API_KEY;

export { PORT, DB_URL, TOTAL_WORKERS, GROQ_API_KEY };