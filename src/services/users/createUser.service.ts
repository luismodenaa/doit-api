import { hash } from "bcryptjs";
import { prisma } from "../../app";
import AppError from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users.interfaces";
import { removeUserPasswordSerializer } from "../../serializers/user.serializer";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
  const checkUser = await prisma.user.findUnique({
    where: { email: userData.email },
  });

  if (checkUser) {
    throw new AppError("Esse email já está sendo usado", 400);
  }

  const hashedPassword = await hash(userData.password, 10);

  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    },
    include: {
      tasks: true,
    },
  });

  const removingUserPassword = await removeUserPasswordSerializer.validate(
    user,
    {
      stripUnknown: true,
    }
  );

  return removingUserPassword;
};

export default createUserService;
