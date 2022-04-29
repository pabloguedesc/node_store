import { NextFunction, Request, Response } from "express";

class AppError {
  readonly message: string;
  readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

async function ErrorMiddleware(
  error: Error,
  request: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): Promise<Response> {
  try {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return res.status(500).json({
      status: "error",
      message: `internal server error - ${error.message}`,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: `internal server error - ${error}`,
    });
  }
}

export { AppError, ErrorMiddleware };
