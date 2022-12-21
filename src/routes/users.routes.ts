import { Router } from "express";
import {
  createUserController,
  getUserProfileController,
  updateUserController,
} from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { userSerializer } from "../serializers/user.serializer";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);
userRoutes.get("/profile", ensureAuthMiddleware, getUserProfileController);
userRoutes.patch("", ensureAuthMiddleware, updateUserController);

export default userRoutes;
