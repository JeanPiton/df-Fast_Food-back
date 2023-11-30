import { prisma } from '@/config';

async function getMenu() {
  const items = await prisma.menu.findMany({
    include: { extra: true, type: true },
  });
  return items;
}

export const menuRepository = {
  getMenu,
};
