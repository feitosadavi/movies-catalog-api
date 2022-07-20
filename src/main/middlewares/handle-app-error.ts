import {
  NextFunction,
  Request,
  Response,
} from 'express';

import AppError from '@/presentation/errors/app-error';

// eslint-disable-next-line max-len
export const handleAppError = (error: Error, _req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>> => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};
