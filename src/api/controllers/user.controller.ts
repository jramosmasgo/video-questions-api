import ResponseApi from "@core/response";
import { IUser } from "@models/user.interface";
import { createUser, getUserByField, updateUser } from "@services/user.service";
import { Request, Response, NextFunction } from "express";

export const createUserController = async (
  req: Request<{}, {}, IUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createUser(req.body);
    new ResponseApi<IUser>({
      data: result,
      message: "User Created",
    }).sendSuccess(res);
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
    const result = await updateUser(req.params.IdUser, req.body);
    new ResponseApi<IUser>({
      data: result,
      message: "User Updated",
    }).sendSuccess(res);
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
    res.cookie("refresh", "alsdkjfalsfjoiweflasndar9234owkfj", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      expires: new Date(Date.now()),
      maxAge: 1000 * 60 * 60 * 24 * 2,
    });
    const result = await getUserByField({
      firebaseId: req.params.IdUserFirebase,
    });
    new ResponseApi<IUser>({
      data: result,
      message: "User Found",
    }).sendSuccess(res);
  } catch (error) {
    next(error);
  }
};
