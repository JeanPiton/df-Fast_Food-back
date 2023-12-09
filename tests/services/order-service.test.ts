import { notFoundError } from '@/errors';
import { orderRepository } from '@/repositories';
import { orderService } from '@/services';

describe('getCode', () => {
  it('should return 0 if there is no items', async () => {
    jest.spyOn(orderRepository, 'getCode').mockImplementationOnce(() => {
      return Promise.resolve([]);
    });
    const result = await orderService.getCode();
    expect(result).toBe(0);
  });
  it('should return the latest id', async () => {
    jest.spyOn(orderRepository, 'getCode').mockImplementationOnce(() => {
      return Promise.resolve([{ id: 1 }]);
    });
    const result = await orderService.getCode();
    expect(result).toBe(1);
  });
});

describe('getTodoOrders', () => {
  it('should return empty array if there is no items', async () => {
    jest.spyOn(orderRepository, 'getTodoOrders').mockImplementationOnce(() => {
      return Promise.resolve([]);
    });
    const result = await orderService.getTodoOrders();
    expect(result).toEqual([]);
  });
  it('should return all items with done false', async () => {
    jest.spyOn(orderRepository, 'getTodoOrders').mockImplementationOnce(() => {
      return Promise.resolve([
        {
          id: 1,
          name: 'name',
          orders: JSON.parse('{ "id": 0 }'),
          price: 10.0,
          updatedAt: new Date(),
          done: false,
        },
      ]);
    });
    const result = await orderService.getTodoOrders();
    expect(result).toEqual([
      {
        id: expect.any(Number),
        name: expect.any(String),
        orders: JSON.parse('{ "id": 0 }'),
        price: expect.any(Number),
        updatedAt: expect.any(Date),
        done: false,
      },
    ]);
  });
});

describe('getDoneOrders', () => {
  it('should return empty array if there is no items', async () => {
    jest.spyOn(orderRepository, 'getDoneOrders').mockImplementationOnce(() => {
      return Promise.resolve([]);
    });
    const result = await orderService.getDoneOrders();
    expect(result).toEqual([]);
  });
  it('should return all items with done true', async () => {
    jest.spyOn(orderRepository, 'getDoneOrders').mockImplementationOnce(() => {
      return Promise.resolve([
        {
          id: 1,
          name: 'name',
          orders: JSON.parse('{ "id": 0 }'),
          price: 10.0,
          updatedAt: new Date(),
          done: true,
        },
      ]);
    });
    const result = await orderService.getDoneOrders();
    expect(result).toEqual([
      {
        id: expect.any(Number),
        name: expect.any(String),
        orders: JSON.parse('{ "id": 0 }'),
        price: expect.any(Number),
        updatedAt: expect.any(Date),
        done: true,
      },
    ]);
  });
});

describe('finishOrder', () => {
  it('should return error if id dont match', async () => {
    jest.spyOn(orderRepository, 'findById').mockImplementationOnce(() => {
      return Promise.resolve(null);
    });
    try {
      await orderService.finishOrder(1);
      fail('should throw notFoundError');
    } catch (error) {
      expect(error).toEqual(notFoundError('order with this id'));
    }
  });
  it('should change done to true', async () => {
    jest
      .spyOn(orderRepository, 'findById')
      .mockImplementationOnce((id: number) => {
        return Promise.resolve({
          id,
          name: 'name',
          orders: JSON.parse('{ "id": 0 }'),
          price: 10.0,
          updatedAt: new Date(),
          done: false,
        });
      });
    jest.spyOn(orderRepository, 'finishOrder').mockImplementationOnce(() => {
      return Promise.resolve();
    });
    const result = await orderService.finishOrder(1);
    expect(result).toBeUndefined();
  });
});

describe('deleteOrder', () => {
  it('should return error if id dont match', async () => {
    jest.spyOn(orderRepository, 'findById').mockImplementationOnce(() => {
      return Promise.resolve(null);
    });
    try {
      await orderService.deleteOrder(1);
      fail('should throw notFoundError');
    } catch (error) {
      expect(error).toEqual(notFoundError('order with this id'));
    }
  });
  it('should delete order', async () => {
    jest
      .spyOn(orderRepository, 'findById')
      .mockImplementationOnce((id: number) => {
        return Promise.resolve({
          id,
          name: 'name',
          orders: JSON.parse('{ "id": 0 }'),
          price: 10.0,
          updatedAt: new Date(),
          done: false,
        });
      });
    jest.spyOn(orderRepository, 'deleteOrder').mockImplementationOnce(() => {
      return Promise.resolve();
    });
    const result = await orderService.deleteOrder(1);
    expect(result).toBeUndefined();
  });
});
