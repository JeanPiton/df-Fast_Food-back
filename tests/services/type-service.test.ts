import { faker } from '@faker-js/faker';
import { Type } from '@prisma/client';
import { typeService } from '@/services';

describe('getTypes', () => {
  it('Should return empty array if there is no types', async () => {
    jest
      .spyOn(typeService, 'getTypes')
      .mockImplementationOnce((): Promise<Type[]> => {
        return Promise.resolve([]);
      });
    const result = await typeService.getTypes();
    expect(result).toEqual([]);
  });
  it('Should return array of there types', async () => {
    jest
      .spyOn(typeService, 'getTypes')
      .mockImplementationOnce((): Promise<Type[]> => {
        return Promise.resolve([
          {
            id: faker.number.int(100),
            name: faker.animal.type(),
            image: faker.animal.type(),
          },
        ]);
      });
    const result = await typeService.getTypes();
    expect(result).toEqual([
      {
        id: expect.any(Number),
        name: expect.any(String),
        image: expect.any(String),
      },
    ]);
  });
});
