import { prisma } from "../../app";
import AppError from "../../errors/AppError";
import { removeUserPasswordSerializer } from "../../serializers/user.serializer";

const getUserProfileService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    include: { tasks: true },
    where: { id: userId },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  const removingUserPassword = await removeUserPasswordSerializer.validate(
    user,
    {
      stripUnknown: true,
    }
  );

  return removingUserPassword;
};

export default getUserProfileService;
