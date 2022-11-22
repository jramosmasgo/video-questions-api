import { ApplicationError } from "@core/error";
import { IUser } from "@models/user.interface";
import { UserModel } from "@schemas/user.schema";

export const createUserData = async (userData: IUser): Promise<IUser> => {
  try {
    return await UserModel.create(userData);
  } catch (error: any) {
    throw new ApplicationError(500, error.message, "create user");
  }
};

export const updateUserData = async (
  userId: string,
  userData: Partial<IUser>
): Promise<IUser> => {
  try {
    const userFound = UserModel.findById(userId);

    if (!userFound) throw new Error("user not found");

    return (await UserModel.findByIdAndUpdate(userId, userData, {
      new: true,
    })) as IUser;
  } catch (error: any) {
    if ((error.message = "user not found")) {
      throw new ApplicationError(404, error.message, "update user");
    }
    throw new ApplicationError(500, error.message, "update user");
  }
};

export const getUserByFieldData = async (
  userFields: Partial<IUser>
): Promise<IUser> => {
  try {
    const result = await UserModel.findOne({ ...userFields });
    if (!result) throw new Error("user not found");

    return result;
  } catch (error: any) {
    if ((error.message = "user not found")) {
      throw new ApplicationError(404, error.message, "get user");
    }
    throw new ApplicationError(500, error.message, "get user");
  }
};
