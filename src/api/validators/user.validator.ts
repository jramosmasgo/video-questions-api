import * as yup from "yup";

export const createUserValidator = yup.object({
  name: yup.string().min(3).max(40).required(),
  firebaseId: yup.string().required(),
  email: yup.string().email().required(),
  loginType: yup.string().required(),
  verified: yup.boolean().required(),
});

export const updateUserValidator = yup.object({
  name: yup.string().min(3).max(40),
  firebaseId: yup.string(),
  email: yup.string().email(),
  loginType: yup.string(),
  verified: yup.boolean(),
});

export const loginUserValidator = yup.object({
  firebaseId: yup.string().required(),
  email: yup.string().email().required(),
});
