import User from "../models/user.js";
import { generateUniqueId } from "../utils/generateUniqueId.js";
import { ApiError } from "../utils/ApiError.js";

const createUser = async ({ userName, email, password }) => {
  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      throw new ApiError(409, "user already exists, please login");
    }

    const userId = await generateUniqueId(User, "userId");
    const user = await User.create({ userId, userName, email, password });

    return user;
  } catch (error) {
    throw error;
  }
};

const getUser = async (userId) => {
  try {
    const user = await User.findOne({ userId });

    if (!user) {
      throw new ApiError(404, "user not found");
    }

    return user;
  } catch (error) {
    throw error;
  }
};

export const userService = { createUser, getUser };
