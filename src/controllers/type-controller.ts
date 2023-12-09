import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { typeService } from '@/services';

export async function getTypes(req: Request, res: Response) {
  const types = await typeService.getTypes();
  res.status(httpStatus.OK).send(types);
}
