import { Router } from 'express';
import { getMenu } from '@/controllers';

const menuRouter = Router();

menuRouter.get('/', getMenu);

export { menuRouter };
