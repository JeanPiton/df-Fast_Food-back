import { prisma } from '@/config';

async function getMenu() {
  const items = await prisma.menu.findMany();
  return items;
}

export const menuRepository = {
  getMenu,
};
