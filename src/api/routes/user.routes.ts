import {
  createUserController,
  getUserByIdFirebaseController,
  loginUserController,
  updateUserController,
} from "@controllers/user.controller";
import tokenValidation from "@middlewares/jwt.middleware";
import validatorSchema from "@middlewares/validatorSchema.middleware";
import {
  createUserValidator,
  loginUserValidator,
  updateUserValidator,
} from "api/validators/user.validator";
import { Router } from "express";

const router = Router();

router.post("/", [validatorSchema(createUserValidator)], createUserController);

router.post(
  "/login",
  [validatorSchema(loginUserValidator)],
  loginUserController
);

router.put(
  "/:IdUser",
  [tokenValidation, validatorSchema(updateUserValidator)],
  updateUserController
);

router.get("/firebase/:idUserFirebase", getUserByIdFirebaseController);

export default router;
