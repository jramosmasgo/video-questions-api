import { ApplicationError } from "@core/error";
import {
  createUserData,
  getUserByFieldData,
  updateUserData,
} from "@data/user.data";
import { IUser, LoginUser } from "@models/user.interface";
import { createAuthToken } from "@utils/token";
import { NextFunction } from "express";

export const createUserService = async (userData: IUser): Promise<IUser> => {
  return await createUserData(userData);
};

export const updateUserService = async (
  userId: string,
  userData: Partial<IUser>
): Promise<IUser> => {
  return await updateUserData(userId, userData);
};

export const loginUserService = async (
  email: string,
  firebaseId: string,
  next: NextFunction
): Promise<LoginUser> => {
  try {
    const user = await getUserByFieldService({ email, firebaseId });
    const token = await createAuthToken({ userId: user._id });
    return { user, token };
  } catch (error) {
    throw next(error);
  }
};

export const getUserByFieldService = async (
  userFields: Partial<IUser>
): Promise<IUser> => {
  return await getUserByFieldData(userFields);
};
