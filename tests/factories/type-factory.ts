import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export async function createType() {
  return prisma.type.create({
    data: { image: faker.image.url(), name: faker.animal.type() },
  });
}
