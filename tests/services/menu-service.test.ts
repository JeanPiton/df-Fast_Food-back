import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';
import { expectTypeOf } from 'expect-type';
import { menuService } from '@/services';
import { FullMenu } from '@/protocols';

describe('getMenu', () => {
  it('Should return empty array if there is no items', async () => {
    jest
      .spyOn(menuService, 'getMenu')
      .mockImplementationOnce((): Promise<FullMenu[]> => {
        return Promise.resolve([]);
      });
    const result = await menuService.getMenu();
    expect(result).toEqual([]);
  });
  it('Should return array of items in menu', async () => {
    jest
      .spyOn(menuService, 'getMenu')
      .mockImplementationOnce((): Promise<FullMenu[]> => {
        return Promise.resolve([
          {
            id: faker.number.int(100),
            name: faker.animal.type(),
            desc: faker.lorem.words(5),
            sdesc: faker.lorem.words(2),
            price: new Prisma.Decimal(
              faker.number.float({ max: 100, precision: 0.01 }),
            ),
            image: faker.image.url(),
            typeId: 0,
            selled: faker.number.int(100),
            type: {
              id: 0,
              name: faker.animal.type(),
              image: faker.image.url(),
            },
            extra: [],
          },
        ]);
      });
    const result = await menuService.getMenu();
    expectTypeOf(result).toEqualTypeOf<FullMenu[]>();
  });
});
