import { prisma } from "../../app";
import AppError from "../../errors/AppError";

const deleteTaskService = async (taskId: string, userId: string) => {
  const checkTask = await prisma.task.findMany({
    where: {
      id: taskId,
      userId: userId,
    },
  });

  console.log(checkTask);

  if (!checkTask.length) {
    throw new AppError("Tarefa não encontrada", 404);
  }

  const delTask = await prisma.task.delete({
    where: {
      id: taskId,
    },
  });

  return {};
};

export default deleteTaskService;
