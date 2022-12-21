import { Router } from "express";
import { loginSessionController } from "../controllers/sessions.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { sessionSerializer } from "../serializers/session.serializer";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  ensureDataIsValidMiddleware(sessionSerializer),
  loginSessionController
);

export default sessionRoutes;
