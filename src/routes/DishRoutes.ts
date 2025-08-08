import { Router } from 'express';
import {
  getAllDishes,
  createDish,
  updateDish,
  deleteDish
} from '../controllers/DishController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Dishes
 *   description: Endpoints for managing dishes
 */

/**
 * @swagger
 * /api/dishes:
 *   get:
 *     summary: Get all dishes
 *     tags: [Dishes]
 *     responses:
 *       200:
 *         description: List of dishes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dish'
 */
router.get('/', getAllDishes);

/**
 * @swagger
 * /api/dishes:
 *   post:
 *     summary: Create a new dish
 *     tags: [Dishes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DishInput'
 *     responses:
 *       201:
 *         description: Dish created successfully
 */
router.post('/', createDish);

/**
 * @swagger
 * /api/dishes/{id}:
 *   put:
 *     summary: Update a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DishInput'
 *     responses:
 *       204:
 *         description: Dish updated successfully
 */
router.put('/:id', updateDish);

/**
 * @swagger
 * /api/dishes/{id}:
 *   delete:
 *     summary: Delete a dish by ID
 *     tags: [Dishes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Dish deleted successfully
 */
router.delete('/:id', deleteDish);

export default router;
