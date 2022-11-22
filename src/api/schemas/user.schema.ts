import { model, Schema } from "mongoose";
import { IUser } from "@models/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      required: true,
      default: true,
    },
    firebaseId: {
      type: String,
      required: true,
    },
    loginType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("Users", userSchema);
