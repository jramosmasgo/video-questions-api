import { Response, Request, NextFunction } from "express";
import ResponseApi from "@core/response";

const ErrorMiddleware = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  new ResponseApi({
    error: err,
    message: err.message,
  }).sendError(res, err.statusCode ?? 500);
};

export default ErrorMiddleware;
