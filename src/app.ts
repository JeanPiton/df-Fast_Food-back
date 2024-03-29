import 'express-async-errors';

import cors from 'cors';
import express, { Express } from 'express';
import { healthRouter, menuRouter, orderRouter, typeRouter } from '@/routers';
import { connectDB, disconnectDB, loadEnv } from './config';
import { handleApplicationErrors } from './middlewares';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/health', healthRouter)
  .use('/type', typeRouter)
  .use('/menu', menuRouter)
  .use('/order', orderRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
