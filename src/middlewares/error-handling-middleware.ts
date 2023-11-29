import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError, RequestError } from '@/protocols';

/* eslint-disable @typescript-eslint/no-unused-vars */
export function handleApplicationErrors(
  err: RequestError | ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err.name === 'InvalidDataError') {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  /* eslint-disable no-prototype-builtins */
  if (err.hasOwnProperty('status') && err.name === 'RequestError') {
    return res.status((err as RequestError).status).send({
      message: err.message,
    });
  }

  /* eslint-disable-next-line no-console */
  console.error(err);
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
