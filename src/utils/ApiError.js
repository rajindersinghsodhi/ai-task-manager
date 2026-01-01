export class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;

    // Maintains proper stack trace (only in V8 engines)
    Error.captureStackTrace(this, this.constructor);
  }
}
