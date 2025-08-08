import { Router } from 'express';
import userRoutes from './UserRoutes';
import dishRoutes from './DishRoutes';
import orderRoutes from './OrderRoutes';
import orderItemRoutes from './OrderItemRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/dishes', dishRoutes);
router.use('/orders', orderRoutes);
router.use('/order-items', orderItemRoutes);

export default router;
