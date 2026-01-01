import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  const status = err instanceof ApiError ? err.statusCode : 500;
  const message =
    err?.response?.data?.message ||
    err?.message ||
    "Internal Server Error";

  res.status(status).json({
    status: "error",
    message,
  });
};

export default errorHandler;
