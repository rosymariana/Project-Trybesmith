import { Router } from 'express';

import ProductController from '../controllers/ProductControllers';

const router = Router();

const controller = new ProductController();

router.route('/').get(controller.getAll);
router.route('/').post(controller.create);

export default router;