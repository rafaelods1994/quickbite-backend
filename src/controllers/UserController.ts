import { Request, Response } from 'express';
import models from '../models/db';

export async function getUsers(req: Request, res: Response) {
  const users = await models.User.findAll();
  res.json(users);
}

export async function createUser(req: Request, res: Response) {
  const { name, email, password, role } = req.body;
  const user = await models.User.create({ name, email, password, role });
  res.status(201).json(user);
}
