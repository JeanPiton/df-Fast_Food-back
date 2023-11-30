import cors from 'cors';
import express, { Express } from 'express';
import { healthRouter, typeRouter } from '@/routers';
import 'express-async-errors';
import { connectDB, disconnectDB, loadEnv } from './config';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .use('/health', healthRouter)
  .use('/type', typeRouter);

export function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
