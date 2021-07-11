import ApiError from "../errors/api-error";
import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from "yup";

export default function validateRequest(schema: ObjectSchema<any>, target: "Body" | "QueryParams") {
  return async (req: Request, res: Response, next: NextFunction) => {
    let targetToValidate = target === "Body" ? req.body : req.query;
    try {
      const validatedBody = await schema.validate(targetToValidate);
      targetToValidate = validatedBody;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
};


