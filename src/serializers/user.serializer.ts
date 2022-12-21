import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUser } from "../interfaces/users.interfaces";
import { tasksSerializer } from "./task.serializer";

export const removeUserPasswordSerializer: SchemaOf<IUser> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    tasks: yup.array().of(tasksSerializer).notRequired(),
  });

export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Precisa ser um email válido")
    .required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
