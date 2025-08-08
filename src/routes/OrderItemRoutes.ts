import { Router } from 'express';
import {
  getOrderItems,
  createOrderItem,
  deleteOrderItem
} from '../controllers/OrderItemController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: OrderItems
 *   description: Endpoints for managing order items
 */

/**
 * @swagger
 * /api/order-items:
 *   get:
 *     summary: Get all order items
 *     tags: [OrderItems]
 *     responses:
 *       200:
 *         description: List of order items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderItem'
 */
router.get('/', getOrderItems);

/**
 * @swagger
 * /api/order-items:
 *   post:
 *     summary: Create a new order item
 *     tags: [OrderItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItemInput'
 *     responses:
 *       201:
 *         description: Order item created successfully
 */
router.post('/', createOrderItem);

/**
 * @swagger
 * /api/order-items/{id}:
 *   delete:
 *     summary: Delete an order item by ID
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Order item deleted successfully
 */
router.delete('/:id', deleteOrderItem);

export default router;
