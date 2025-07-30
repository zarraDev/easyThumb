import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/apiError";
import loggerApp from "../utils/logger";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  loggerApp.error(err);

  if (err instanceof ApiError) {
    res.status(err.codeStatus).json(err.toJSON());
  } else {
    res.status(500).json({
      codeStatus: 500,
      isSuccess: false,
      message: "Internal Server Error",
      erreurs: [err.message || String(err)],
    });
  }
};
