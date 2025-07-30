import { NextFunction, Request, RequestHandler, Response } from 'express';

export const asyncHandler =
  (requestHandler: RequestHandler): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
