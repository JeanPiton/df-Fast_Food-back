import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { orderService } from '@/services';

export async function getCode(req: Request, res: Response) {
  const code = await orderService.getCode();
  res.status(httpStatus.OK).send({ code });
}

export async function getTodoOrders(req: Request, res: Response) {
  const order = await orderService.getTodoOrders();
  res.status(httpStatus.OK).send(order);
}

export async function getDoneOrders(req: Request, res: Response) {
  const order = await orderService.getDoneOrders();
  res.status(httpStatus.OK).send(order);
}

export async function finishOrder(req: Request, res: Response) {
  const { id } = req.params;
  await orderService.finishOrder(Number(id));
  res.sendStatus(httpStatus.OK);
}

export async function postOrder(req: Request, res: Response) {
  const { name, price, order } = req.body;
  const createdOrder = await orderService.postOrder(name, price, order);
  res.status(httpStatus.CREATED).send(createdOrder);
}

export async function deleteOrder(req: Request, res: Response) {
  const { id } = req.params;
  await orderService.deleteOrder(Number(id));
  res.sendStatus(httpStatus.OK);
}
