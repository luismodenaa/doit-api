import { Request, Response } from "express";
import { ISessionLogin } from "../interfaces/session.interfaces";
import loginSessionService from "../services/sessions/loginSession.service";

export const loginSessionController = async (req: Request, res: Response) => {
  const sessionData: ISessionLogin = req.body;
  const token = await loginSessionService(sessionData);
  return res.status(200).json({ token });
};
