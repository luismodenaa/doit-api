import { prisma } from "../../app";
import AppError from "../../errors/AppError";
import { ITasks, ITasksRequest } from "../../interfaces/tasks.interfaces";

const updateTaskService = async (
  data: ITasksRequest,
  taskId: string,
  userId: string
): Promise<ITasks> => {
  const checkTask = await prisma.task.findMany({
    where: {
      id: taskId,
      userId: userId,
    },
  });

  if (!checkTask.length) {
    throw new AppError("Tarefa não encontrada", 404);
  }

  const updateTask = await prisma.task.update({
    where: {
      id: taskId,
    },
    data,
  });

  return updateTask;
};

export default updateTaskService;
