import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITasks } from "../interfaces/tasks.interfaces";

export const tasksSerializer: SchemaOf<ITasks> = yup.object().shape({
  id: yup.string().notRequired(),
  title: yup.string().notRequired(),
  content: yup.string().notRequired(),
  finished: yup.boolean().notRequired(),
  userId: yup.string().notRequired(),
});
