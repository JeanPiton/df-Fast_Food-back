import { prisma } from '@/config';

async function getMenu(n: string, t?: number) {
  const items = await prisma.menu.findMany({
    where: {
      ...(t !== undefined ? { typeId: t } : {}),
      name: { contains: n, mode: 'insensitive' },
    },
    include: { extra: true, type: true },
  });
  return items;
}

export const menuRepository = {
  getMenu,
};
