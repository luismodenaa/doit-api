import { prisma } from "../../app";
import AppError from "../../errors/AppError";
import { ITasksRequest } from "../../interfaces/tasks.interfaces";

const createTaskService = async (taskData: ITasksRequest, userId: string) => {
  const checkTask = await prisma.task.findUnique({
    where: { title: taskData.title },
  });

  if (checkTask) {
    throw new AppError("Já existe uma tarefa com este nome", 400);
  }

  const task = await prisma.task.create({
    data: {
      title: taskData.title,
      content: taskData.content,
      userId: userId,
    },
  });

  return task;
};

export default createTaskService;
