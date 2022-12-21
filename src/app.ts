import "express-async-errors";
import express from "express";
import cors from "cors";
import handleError from "./errors/handleError";
import { PrismaClient } from "@prisma/client";
import userRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import tasksRoutes from "./routes/tasks.routes";

export const prisma = new PrismaClient();
export const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/tasks", tasksRoutes);

app.use(handleError);
