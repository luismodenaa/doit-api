import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  updateTaskController,
} from "../controllers/tasks.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const tasksRoutes = Router();

tasksRoutes.post("", ensureAuthMiddleware, createTaskController);
tasksRoutes.delete("/:id", ensureAuthMiddleware, deleteTaskController);
tasksRoutes.patch("/:id", ensureAuthMiddleware, updateTaskController);

export default tasksRoutes;
