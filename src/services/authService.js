import User from "../models/user.js";
import { userService } from "./userService.js";
import { jwtService } from "./jwtService.js";
import { ApiError } from "../utils/ApiError.js";
import { passwordService } from "./passwordService.js";

const signup = async ({ userName, email, password }) => {
  try {
    const hashedPassword = await passwordService.hashPassword(password);

    const user = await userService.createUser({
      userName,
      email,
      password: hashedPassword,
    });

    const authToken = await jwtService.generateJwtToken({
      userId: user.userId,
      userName: user.userName,
      email: user.email,
    });

    return { user, authToken };
  } catch (error) {
    throw error;
  }
};

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(404, "user doesn't exist please sign up");
    }

    const match = await passwordService.verifyPassword({
      password,
      hashedPassword: user.password,
    });

    if (!match) {
      throw new ApiError(401, "invalid password, please try again");
    }

    const authToken = await jwtService.generateJwtToken({
      userId: user.userId,
      userName: user.userName,
      email: user.email,
    });

    return { user, authToken };
  } catch (error) {
    throw error;
  }
};

export const authenticationService = { signup, login };
