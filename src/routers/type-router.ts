import { Router } from 'express';
import { getTypes } from '@/controllers';

const typeRouter = Router();

typeRouter.get('/', getTypes);

export { typeRouter };
