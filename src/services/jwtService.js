import jwt from "jsonwebtoken";
import { JWT_KEY } from "../config/env.js";

const generateJwtToken = async (data) => {
  try {
    const authToken = jwt.sign(data, JWT_KEY);
    return authToken;
  } catch (error) {
    throw error;
  }
};

const verifyJwtToken = (token) => {
  try {
    const result = jwt.verify(token, JWT_KEY);
    return result;
  } catch (error) {
    throw error;
  }
};

export const jwtService = { generateJwtToken, verifyJwtToken };
