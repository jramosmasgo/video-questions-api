import { ApplicationError } from "@core/error";
import { Response, Request, NextFunction } from "express";
import { ObjectSchema } from "yup";

const validatorSchema =
  (schema: ObjectSchema<any>) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error: any) {
      next(
        new ApplicationError(400, error.message, "validation esquema Error")
      );
    }
  };

export default validatorSchema;
