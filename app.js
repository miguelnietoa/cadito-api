import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import { connect, disconnect } from './src/configs/db.config.js';

import indexRouter from './src/routes/index.routes.js';
import usersRouter from './src/routes/users.routes.js';
import postsRouter from './src/routes/posts.routes.js';
import reviewsRouter from './src/routes/reviews.routes.js';
import cartsRouter from './src/routes/carts.routes.js';
import historiesRouter from './src/routes/histories.routes.js';

const app = express();

// Middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/reviews', reviewsRouter);
app.use('/cart', cartsRouter);
app.use('/history', historiesRouter);

// Connect database
connect();

// Disconnect database connection on server stop
process.on('SIGINT', async () => {
  await disconnect();
  process.exit(0);
});

export default app;
