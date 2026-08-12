import { Request, Response, NextFunction } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction) {
  const err = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  (err as any).status = 404;
  (err as any).code = 'ROUTE_NOT_FOUND';
  next(err);
}
