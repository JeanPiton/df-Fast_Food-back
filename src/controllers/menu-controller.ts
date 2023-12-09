import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { menuService } from '@/services';

export async function getMenu(req: Request, res: Response) {
  const { type, name } = req.query;
  const items = await menuService.getMenu(type, name);
  res.status(httpStatus.OK).send(items);
}
