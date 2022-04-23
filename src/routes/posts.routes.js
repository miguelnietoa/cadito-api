import { Router } from 'express';
import * as PostsController from '../controllers/posts.controller.js';

const router = Router();

router.post('/', PostsController.createPost);
router.get('/', PostsController.fetchPosts);
router.get('/recent', PostsController.fetchRecentPosts);

export default router;
