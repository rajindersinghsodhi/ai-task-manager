import dotenv from "dotenv";

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8080;

export { PORT };