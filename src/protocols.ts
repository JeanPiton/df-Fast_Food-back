import { Menu } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export type ApplicationError = {
  name: string;
  message: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};

export type FullMenu = Menu & {
  extra: {
    id: number;
    name: string;
    image: string;
    price: Decimal;
    desc: string;
  }[];
  type: {
    id: number;
    name: string;
    image: string;
  };
};
