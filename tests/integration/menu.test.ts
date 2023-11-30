import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { createItem } from '../factories/menu-factory';
import { createType } from '../factories/type-factory';
import { cleanDB } from '../helpers';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDB();
});

const server = supertest(app);

describe('GET /menu', () => {
  it('should respond with status ok and an empty array when there is no items', async () => {
    const response = await server.get('/menu');

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual([]);
  });

  it('should responde with status ok and an array of all items', async () => {
    const type1 = await createType();
    const item1 = await createItem(type1.id);
    const item2 = await createItem(type1.id);
    const result = [
      { ...item1, type: type1, extra: [] },
      { ...item2, type: type1, extra: [] },
    ];

    const response = await server.get('/menu');

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual(result);
  });

  it('should responde with status ok and an array of all items with specific type', async () => {
    const type1 = await createType();
    const type2 = await createType();
    await createItem(type1.id);
    const item2 = await createItem(type2.id);
    const result = [{ ...item2, extra: [], type: type2 }];

    const response = await server.get(`/menu?type=${type2.id}`);

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual(result);
  });

  it('should responde with status ok and an array of all items with specific name', async () => {
    const type1 = await createType();
    const item1 = await createItem(type1.id);
    await createItem(type1.id);
    const result = [{ ...item1, extra: [], type: type1 }];

    const response = await server.get(`/menu?name=${item1.name}`);

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual(result);
  });
});
