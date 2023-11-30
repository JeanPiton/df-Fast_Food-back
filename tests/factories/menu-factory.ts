import { faker } from '@faker-js/faker';
import { prisma } from '@/config';

export function createItem(typeId: number) {
  return prisma.menu.create({
    data: {
      name: faker.animal.type(),
      desc: faker.lorem.words(5),
      sdesc: faker.lorem.words(2),
      image: faker.image.url(),
      price: faker.number.float({ max: 100, precision: 0.01 }),
      selled: faker.number.int(100),
      typeId,
    },
  });
}
