import { Request, Response } from 'express';
import models from '../models/db';

export async function getAllDishes(req: Request, res: Response) {
  const dishes = await models.Dish.findAll();
  res.json(dishes);
}

export async function createDish(req: Request, res: Response) {
  const { name, description, price, available } = req.body;
  const dish = await models.Dish.create({ name, description, price, available });
  res.status(201).json(dish);
}

export async function updateDish(req: Request, res: Response) {
  const { id } = req.params;
  await models.Dish.update(req.body, { where: { id } });
  res.sendStatus(204);
}

export async function deleteDish(req: Request, res: Response) {
  const { id } = req.params;
  await models.Dish.destroy({ where: { id } });
  res.sendStatus(204);
}
