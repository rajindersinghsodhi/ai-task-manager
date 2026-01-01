import { authenticationService } from "../../services/authService.js";

const signup = async (req, res, next) => {
  try {
    const { user, authToken } = await authenticationService.signup(req.body);

    res.cookie("_dod_aid", authToken, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "none",
      path: "/",
    });

    return res.status(200).json({
      status: "success",
      message: "user logged in successfully",
      user,
      authToken,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { user, authToken } = await authenticationService.login(req.body);

    res.cookie("_dod_aid", authToken, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "none",
      path: "/",
    });

    return res.status(200).json({
      status: "success",
      message: "user logged in successfully",
      user,
      authToken,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("_dod_aid", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    res.clearCookie("_dod_dbk", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    res.clearCookie("_dod_chid", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });

    return res.status(200).json({
      status: "success",
      message: "user logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

const authCheck = async (req, res, next) => {
  try {
    const user = req.user;

    return res.status(200).json({
      status: "success",
      message: "user is logged in",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const authController = { signup, login, logout, authCheck };