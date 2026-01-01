import { jwtService } from "../services/jwtService.js";

const authMiddleWare = async (req, res, next) => {
  try {
    const authToken = req.cookies._dod_aid;

    if (!authToken) {
      return res.status(401).json({
        status: "error",
        message: "Access denied. Please login to continue"
      });
    }

    const user = jwtService.verifyJwtToken(authToken);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "No user found for these credentials"
      });
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export { authMiddleWare };
