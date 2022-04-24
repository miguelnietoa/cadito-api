import { Router } from 'express';
import * as CartsController from '../controllers/carts.controller.js';

const router = Router();

router.post('/', CartsController.addToCart);
router.get('/', CartsController.fetchCart);
router.get('/buy', CartsController.buyCart);
router.delete('/', CartsController.removeFromCart);

export default router;
