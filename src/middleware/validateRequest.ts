import ApiError from "../errors/api-error";
import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from "yup";

export function validateBody(schema: ObjectSchema<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
}

export function validateQueryParams(schema: ObjectSchema<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedQueryParams = await schema.validate(req.query);
      req.query = validatedQueryParams;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  }
};

