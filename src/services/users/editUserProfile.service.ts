import { hash } from "bcryptjs";
import { prisma } from "../../app";
import { IUserRequest, IUserUpdated } from "../../interfaces/users.interfaces";
import { removeUserPasswordSerializer } from "../../serializers/user.serializer";

const updateUserService = async (
  userId: string,
  userData: IUserRequest
): Promise<IUserUpdated> => {
  const password = userData.password
    ? await hash(userData.password, 10)
    : undefined;

  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      email: userData.email,
      password: password,
      name: userData.name,
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

export default updateUserService;
