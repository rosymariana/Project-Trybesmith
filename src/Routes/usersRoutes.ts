import { Router } from 'express';

import UsersController from '../controllers/UsersControllers';

const router = Router();

const controller = new UsersController();

router.route('/').post(controller.create);

export default router;