import { getCode } from '@/controllers';
import { Router } from 'express';

const orderRouter = Router()

orderRouter.get('/code',getCode)

export { orderRouter };
