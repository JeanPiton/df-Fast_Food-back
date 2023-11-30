import { prisma } from '@/config';

async function getTypes() {
  const types = await prisma.type.findMany();
  return types;
}

export const typeRepository = {
  getTypes,
};
