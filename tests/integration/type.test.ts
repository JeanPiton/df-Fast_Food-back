import httpStatus from 'http-status';
import supertest from 'supertest';
import app, { init } from '@/app';
import { createType } from '../factories/type-factory';
import { cleanDB } from '../helpers';

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDB();
});

const server = supertest(app);

describe('GET /types', () => {
  it('should respond with status ok and an empty array when there is no type', async () => {
    const response = await server.get('/type');

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual([]);
  });

  it('should responde with status ok and an array of all types', async () => {
    const type1 = await createType();
    const type2 = await createType();
    const result = [type1, type2];

    const response = await server.get('/type');

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual(result);
  });
});
