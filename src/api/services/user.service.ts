import { IUser } from "@models/user.interface";
import { UserModel } from "@schemas/user.schema";

export const createUser = async (userData: IUser): Promise<IUser> => {
  try {
    return await UserModel.create(userData);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUser = async (
  userId: string,
  userData: Partial<IUser>
): Promise<IUser> => {
  try {
    const userFound = UserModel.findById(userId);

    if (!userFound) {
      throw new Error("User not found");
    }

    return (await UserModel.findByIdAndUpdate(userId, userData, {
      new: true,
    })) as IUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserByField = async (
  userFields: Partial<IUser>
): Promise<IUser> => {
  try {
    const result = await UserModel.findOne({ ...userFields });
    if (!result) throw new Error("User not found");

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
