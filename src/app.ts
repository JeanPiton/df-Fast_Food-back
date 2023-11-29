import cors from 'cors';
import express, { Express } from 'express';
import 'express-async-errors';
import { connectDB, disconnectDB, loadEnv } from './config';
import { healthRouter } from './routers/health-router';

loadEnv();

const app = express();
app.use(cors()).use(express.json()).use('/health', healthRouter);

export function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
