import { Request, Response } from 'express';
import models from '../models/db';

export async function getOrders(req: Request, res: Response) {
  const orders = await models.Order.findAll({
    include: [{ model: models.OrderItem, include: [models.Dish] }]
  });
  res.json(orders);
}

export async function createOrder(req: Request, res: Response) {
  const { userId, items } = req.body;

  const order = await models.Order.create({ userId, status: 'pending' });

  const orderItems = items.map((item: { dishId: number; quantity: number }) => ({
    orderId: order.id,
    dishId: item.dishId,
    quantity: item.quantity
  }));

  await models.OrderItem.bulkCreate(orderItems);

  res.status(201).json({ orderId: order.id });
}

export async function updateOrderStatus(req: Request, res: Response) {
  const { id } = req.params;
  const { status } = req.body;

  await models.Order.update({ status }, { where: { id } });
  res.sendStatus(204);
}
