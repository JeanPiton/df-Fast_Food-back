import { faker } from '@faker-js/faker';
import { IdSchema, OrdersSchema } from '@/schemas/order-schema';

describe('IdSchema', () => {
  const generateValidInput = () => ({
    id: faker.number.int(100),
  });

  describe('When id is not valid', () => {
    it('should return error if id is not present', () => {
      const input = generateValidInput();
      delete input.id;

      const { error } = IdSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  it('should return no error if input is valid', () => {
    const input = generateValidInput();

    const { error } = IdSchema.validate(input);

    expect(error).toBeUndefined();
  });
});

describe('OrderSchema', () => {
  const generateValidInput = () => ({
    name: faker.person.firstName(),
    price: faker.number.float({ min: 1, max: 1000, precision: 0.01 }),
    order: faker.lorem.word(),
  });

  describe('When name is not valid', () => {
    it('should return error if name is not present', () => {
      const input = generateValidInput();
      delete input.name;

      const { error } = OrdersSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe('When price is not valid', () => {
    it('should return error if price is not present', () => {
      const input = generateValidInput();
      delete input.price;

      const { error } = OrdersSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe('When order is not valid', () => {
    it('should return error if order is not present', () => {
      const input = generateValidInput();
      delete input.order;

      const { error } = OrdersSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  it('should return no error if input is valid', () => {
    const input = generateValidInput();

    const { error } = OrdersSchema.validate(input);

    expect(error).toBeUndefined();
  });
});
