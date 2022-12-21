import { ITasks } from "./tasks.interfaces";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: ITasks[];
}

export interface IUserUpdated {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
