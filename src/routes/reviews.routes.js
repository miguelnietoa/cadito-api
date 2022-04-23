import { Router } from 'express';
import * as ReviewsController from '../controllers/reviews.controller.js';

const router = Router();

router.post('/', ReviewsController.createReview);
router.get('/', ReviewsController.fetchReviews);

export default router;
