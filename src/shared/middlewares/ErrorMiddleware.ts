import { NextFunction, Request, Response } from "express";

// criação de middleware responsável por retornar os erros da api

class AppError {
  readonly message: string;
  readonly statusCode: number;

  // construtor responsável pela customização do retorno "message" e "statusCode"
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

async function ErrorMiddleware(
  error: Error,
  request: Request,
  res: Response,
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
