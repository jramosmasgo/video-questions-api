import {
  createUserController,
  getUserByIdFirebaseController,
  updateUserController,
} from "@controllers/user.controller";
import { Router } from "express";

const router = Router();

router.post("/", createUserController);
router.put("/", updateUserController);
router.get("/firebase/:idUserFirebase", getUserByIdFirebaseController);

export default router;
