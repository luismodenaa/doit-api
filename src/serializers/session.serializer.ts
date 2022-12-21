import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISessionLogin } from "../interfaces/session.interfaces";

export const sessionSerializer: SchemaOf<ISessionLogin> = yup.object().shape({
  email: yup
    .string()
    .email("Precisa ser um email válido")
    .required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});
