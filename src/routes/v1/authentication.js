import { Router } from "express";
import { authController } from "../../contollers/v1/authController.js";
import { authMiddleWare } from "../../middlewares/auth.js";

const authenticationRoutes = Router();

authenticationRoutes.get("/", authMiddleWare, authController.authCheck);

authenticationRoutes.post(
  "/signup",
  authController.signup
);

authenticationRoutes.post(
  "/login",
  authController.login
);

authenticationRoutes.post("/logout", authController.logout);

export default authenticationRoutes;
