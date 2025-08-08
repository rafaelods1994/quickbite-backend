import { Request, Response } from 'express';
import models from '../models/db';

export const getOrderItems = async (_req: Request, res: Response) => {
  const items = await models.OrderItem.findAll();
  res.status(200).json(items);
};

export const createOrderItem = async (req: Request, res: Response) => {
  const { orderId, dishId, quantity } = req.body;
  const item = await models.OrderItem.create({ orderId, dishId, quantity });
  res.status(201).json(item);
};

export const deleteOrderItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  await models.OrderItem.destroy({ where: { id } }); // ✅ fixed
  res.sendStatus(204);
};
