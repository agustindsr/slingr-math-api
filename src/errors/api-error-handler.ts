import ApiError from './api-error'
import { Request, Response, NextFunction } from 'express';

function apiErrorHandler(err: ApiError, req: Request, res: Response, next: NextFunction) {

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json('something went wrong');
}

export default apiErrorHandler;