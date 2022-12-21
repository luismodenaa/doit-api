import { compare } from "bcryptjs";
import { prisma } from "../../app";
import AppError from "../../errors/AppError";
import { ISessionLogin } from "../../interfaces/session.interfaces";
import "dotenv/config";
import jwt from "jsonwebtoken";

const loginSessionService = async (data: ISessionLogin) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user) {
    throw new AppError("Email ou senha incorretos", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email ou senha incorretos", 403);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: String(user.id),
    expiresIn: "30d",
  });

  return token;
};

export default loginSessionService;
