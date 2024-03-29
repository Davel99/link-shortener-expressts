import { Request, Response, NextFunction } from 'express';
import ShortenerAppError from '../utility/ShortenerAppError';

const errorHandler = (
  err: ShortenerAppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

export default errorHandler;
