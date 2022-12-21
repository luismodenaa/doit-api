import { Request, Response } from "express";
import { ITasksRequest } from "../interfaces/tasks.interfaces";
import createTaskService from "../services/tasks/createTask.service";
import deleteTaskService from "../services/tasks/deleteTask.service";
import updateTaskService from "../services/tasks/updateTask.service";

export const createTaskController = async (req: Request, res: Response) => {
  const taskData: ITasksRequest = req.body;
  const newTask = await createTaskService(taskData, req.user.id);
  return res.status(201).json(newTask);
};

export const deleteTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const delTask = await deleteTaskService(taskId, req.user.id);
  return res.status(204).json({});
};

export const updateTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const updateTask = await updateTaskService(req.body, taskId, req.user.id);
  return res.status(200).json(updateTask);
};
