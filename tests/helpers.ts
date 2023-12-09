import { prisma } from '@/config';

export async function cleanDB() {
  await prisma.order.deleteMany();
  await prisma.menu.deleteMany();
  await prisma.extra.deleteMany();
  await prisma.type.deleteMany();
}
