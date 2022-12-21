import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import updateUserService from "../services/users/editUserProfile.service";
import getUserProfileService from "../services/users/getUserProfile.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

export const getUserProfileController = async (req: Request, res: Response) => {
  const user = await getUserProfileService(req.user.id);
  return res.status(200).json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const userEdit = await updateUserService(req.user.id, userData);
  return res.status(200).json(userEdit);
};
