import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  const statusCode = err.status || err.statusCode || 500;

  const errorResponse = {
    success: false,
    error: {
      code: err.code || 'INTERNAL_SERVER_ERROR',
      message: err.message || 'An unexpected error occurred.',
      ...(env.NODE_ENV !== 'production' && { stack: err.stack }),
    },
  };

  if (statusCode === 500) {
    console.error('Unhandled server error:', err);
  }

  res.status(statusCode).json(errorResponse);
}
