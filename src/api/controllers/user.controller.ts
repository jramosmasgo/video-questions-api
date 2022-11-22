import ResponseApi from "@core/response";
import { IUser, LoginUser } from "@models/user.interface";
import {
  createUserService,
  getUserByFieldService,
  loginUserService,
  updateUserService,
} from "@services/user.service";
import { NextFunction, Request, Response } from "express";

export const createUserController = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createUserService(req.body);
    new ResponseApi<IUser>({
      data: result,
      action: "create user",
    }).sendResponse(res);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: Request<{ IdUser: string }, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await updateUserService(req.params.IdUser, req.body);
    new ResponseApi<IUser>({
      data: result,
      action: "update user",
    }).sendResponse(res);
  } catch (error) {
    next(error);
  }
};

export const loginUserController = async (
  req: Request<{}, {}, { email: string; firebaseId: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await loginUserService(
      req.body.email,
      req.body.firebaseId,
      next
    );
    new ResponseApi<LoginUser>({
      data: result,
      action: "login user",
    }).sendResponse(res);
  } catch (error) {
    next(error);
  }
};

export const getUserByIdFirebaseController = async (
  req: Request<{ IdUserFirebase: string }, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    // res.cookie("refresh", "alsdkjfalsfjoiweflasndar9234owkfj", {
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: true,
    //   expires: new Date(Date.now()),
    //   maxAge: 1000 * 60 * 60 * 24 * 2,
    // });
    const result = await getUserByFieldService({
      firebaseId: req.params.IdUserFirebase,
    });
    new ResponseApi<IUser>({
      data: result,
      action: "find User by firebaseId",
    }).sendResponse(res);
  } catch (error) {
    next(error);
  }
};
