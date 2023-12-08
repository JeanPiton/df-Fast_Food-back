import { deleteOrder, finishOrder, getCode, getDoneOrders, getTodoOrders, postOrder } from '@/controllers';
import { validateBody, validateParams } from '@/middlewares';
import { IdSchema, OrdersSchema } from '@/schemas/order-schema';
import { Router } from 'express';

const orderRouter = Router();

orderRouter.get('/code',getCode);
orderRouter.get('/todo',getTodoOrders);
orderRouter.get('/done',getDoneOrders);
orderRouter.put('/finish/:id',validateParams(IdSchema),finishOrder);
orderRouter.post('/',validateBody(OrdersSchema),postOrder);
orderRouter.delete('/delete/:id',validateParams(IdSchema),deleteOrder);

export { orderRouter };
