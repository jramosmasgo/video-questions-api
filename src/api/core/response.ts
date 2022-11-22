import { Response } from "express";

interface PropertiesResponseApi<T> {
  data?: T;
  error?: any | null;
  message: string;
}

export default class ResponseApi<T> {
  ok: boolean = true;
  message: string = "";
  data: T | null = null;
  error: any;

  constructor(param: PropertiesResponseApi<T>) {
    this.data = param.data ?? null;
    this.error = param.error;
    this.message = param.message;
  }

  sendSuccess(res: Response) {
    return res.status(200).json({
      ok: true,
      message: this.message,
      data: this.data,
      error: null,
    });
  }

  sendError(res: Response, statusCode: number) {
    return res.status(statusCode).json({
      ok: false,
      message: this.message,
      data: null,
      error: this.error,
    });
  }
}
