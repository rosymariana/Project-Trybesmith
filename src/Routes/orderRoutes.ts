import { Router } from 'express';

import OrderController from '../controllers/OrderControllers';

const router = Router();

const controller = new OrderController();

router.route('/').get(controller.getAll);

export default router;