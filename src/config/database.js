import mongoose from "mongoose";
import { DB_URL, TOTAL_WORKERS } from "../config/env.js"
import { error } from "console";

const connectDb = async () => {
    try {
        if(!DB_URL){
            throw error ("db url not found in env variables");
        }

        if(mongoose.connection.readyState === 1){
            return;
        }

        const totalConnections = 100;
        const maxPoolSizePerWorker = Math.floor(totalConnections/TOTAL_WORKERS) || 5;

        await mongoose.connect(DB_URL, {
            maxPoolSize: maxPoolSizePerWorker,
            minPoolSize: 2,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000
        });
    } catch (error) {
        throw error;
    }
}

export { connectDb };