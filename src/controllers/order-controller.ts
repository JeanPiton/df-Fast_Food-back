import { orderService } from '@/services';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getCode(req:Request, res:Response){
    const code = await orderService.getCode()
    res.status(httpStatus.OK).send({code})
}