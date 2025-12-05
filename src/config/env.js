import os from "os";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;
const TOTAL_WORKERS = Math.max(1, os.cpus().length - 1);
const GROQ = process.env.GROQ;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;

export { PORT, DB_URL, TOTAL_WORKERS, GROQ, ALLOWED_ORIGINS };