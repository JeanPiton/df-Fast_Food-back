import { ApplicationError } from '@/protocols';

export function notFoundError(details: string): ApplicationError {
  return {
    name: 'NotFoundError',
    message: `Not found: ${details}`,
  };
}