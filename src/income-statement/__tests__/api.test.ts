import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import model from '../model';
import app from '../../app';
import * as mock from './mock';
import * as Schema from '../schema';

describe('Income statement API', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri());
    await model.insertMany(mock.initIncomeStatement);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe(`GET '/income-statement'`, () => {
    test(`Find data all, should return a 200 status and the correct body`, async () => {
      const { statusCode, body } = await supertest(app).get(
        '/income-statement'
      );
      expect(statusCode).toBe(200);
      expect(body.code).toEqual('income-statement/succeeded');
      expect(body.data).toEqual(mock.incomeStatement);
    });
  });

  describe(`GET '/income-statement/:id'`, () => {
    test(`Find data does exist, should return a 200 status and the correct body`, async () => {
      const { statusCode, body } = await supertest(app).get(
        `/income-statement/${mock.initIncomeStatement[0]._id}`
      );

      expect(statusCode).toBe(200);
      expect(body).toHaveProperty('code', 'income-statement/succeeded');
      expect(body.data).toEqual({
        ...mock.initIncomeStatement[0],
        created_at: expect.any(String),
        updated_at: expect.any(String),
      });
    });
    test(`Find data does not exist, should return a 404 status`, async () => {
      const { statusCode } = await supertest(app).get(
        `/income-statement/${new mongoose.Types.ObjectId().toString()}`
      );

      expect(statusCode).toBe(404);
    });
    test(`Find data with the wrong params 'id' pattern, should return a 404`, async () => {
      const { statusCode } = await supertest(app).get(`/income-statement/abcd`);

      expect(statusCode).toBe(404);
    });
  });

  describe(`POST '/income-statement'`, () => {
    describe(`Add data with the correct schema`, () => {
      test(`given 'type'='income', should return a 201 and the correct body`, async () => {
        const data: Schema.CreateIncomeStatementBody = {
          title: 'test',
          type: 'income',
          income_statement_monthly: {
            january: 2300,
          },
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(201);
        expect(body).toHaveProperty('code', 'income-statement/created');
        expect(body.data).toEqual({
          ...data,
          __v: 0,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          income_statement_monthly: {
            january: 2300,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
          },
        });
      });
      test(`given 'type'='fixed expenses', should return a 201 and the correct body`, async () => {
        const data: Schema.CreateIncomeStatementBody = {
          title: 'test',
          type: 'fixed expenses',
          income_statement_monthly: {
            january: 2300,
          },
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(201);
        expect(body).toHaveProperty('code', 'income-statement/created');
        expect(body.data).toEqual({
          ...data,
          __v: 0,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          income_statement_monthly: {
            january: 2300,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
          },
        });
      });
      test(`given 'type'='saving & investment', should return a 201 and the correct body`, async () => {
        const data: Schema.CreateIncomeStatementBody = {
          title: 'test',
          type: 'saving & investment',
          income_statement_monthly: {
            january: 2300,
          },
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(201);
        expect(body).toHaveProperty('code', 'income-statement/created');
        expect(body.data).toEqual({
          ...data,
          __v: 0,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          income_statement_monthly: {
            january: 2300,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
          },
        });
      });

      test(`given 'type'='variable expenses', should return a 201 and the correct body`, async () => {
        const data: Schema.CreateIncomeStatementBody = {
          title: 'test',
          type: 'variable expenses',
          income_statement_monthly: {
            january: 2300,
          },
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(201);
        expect(body).toHaveProperty('code', 'income-statement/created');
        expect(body.data).toEqual({
          ...data,
          __v: 0,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          income_statement_monthly: {
            january: 2300,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
          },
        });
      });

      test(`not given 'income_statement_monthly', should return a 201 and the correct body`, async () => {
        const data: Schema.CreateIncomeStatementBody = {
          title: 'test',
          type: 'variable expenses',
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(201);
        expect(body).toHaveProperty('code', 'income-statement/created');
        expect(body.data).toEqual({
          ...data,
          __v: 0,
          _id: expect.any(String),
          created_at: expect.any(String),
          updated_at: expect.any(String),
          income_statement_monthly: {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0,
          },
        });
      });
    });
    describe(`Add data with the wrong schema`, () => {
      test(`given the wrong 'type', should return a 400 and error message`, async () => {
        const data = {
          title: 'test',
          type: 'wrong_type',
          income_statement_monthly: {
            january: 2300,
          },
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });
      test(`given title more the 100 max length, should return a 400 and error message`, async () => {
        const data = {
          title: 't'.repeat(101),
          type: 'income',
          income_statement_monthly: {
            january: 2300,
          },
        };
        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });
      test(`given 'income_statement_monthly.january' with the string data, should return a 400 and error message`, async () => {
        const data = {
          title: 'test',
          type: 'income',
          income_statement_monthly: {
            january: 'asd',
          },
        };

        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });
      test(`not given 'type' and 'title', should return a 400 and error message`, async () => {
        const data = {
          income_statement_monthly: {
            january: 'asd',
          },
        };

        const { statusCode, body } = await supertest(app)
          .post(`/income-statement`)
          .send(data);

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });
    });
  });

  describe(`PATCH '/income-statement/:id'`, () => {
    describe(`Update data with the correct schema`, () => {
      test(`given 'type'='income', should return a 200 and the correct body`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ type: 'income' });

        expect(statusCode).toBe(200);
        expect(body).toHaveProperty('code', 'income-statement/updated');
        expect(body.data).toEqual({
          ...mock.initIncomeStatement[1],
          type: 'income',
          created_at: expect.any(String),
          updated_at: expect.any(String),
        });
      });

      test(`given 'type'='fixed expenses', should return a 200 and the correct body`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ type: 'fixed expenses' });

        expect(statusCode).toBe(200);
        expect(body).toHaveProperty('code', 'income-statement/updated');
        expect(body.data).toEqual({
          ...mock.initIncomeStatement[1],
          type: 'fixed expenses',
          created_at: expect.any(String),
          updated_at: expect.any(String),
        });
      });
      test(`given 'type'='saving & investment', should return a 200 and the correct body`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ type: 'saving & investment' });

        expect(statusCode).toBe(200);
        expect(body).toHaveProperty('code', 'income-statement/updated');
        expect(body.data).toEqual({
          ...mock.initIncomeStatement[1],
          type: 'saving & investment',
          created_at: expect.any(String),
          updated_at: expect.any(String),
        });
      });

      test(`given 'type'='variable expenses', should return a 200 and the correct body`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ type: 'variable expenses' });

        expect(statusCode).toBe(200);
        expect(body).toHaveProperty('code', 'income-statement/updated');
        expect(body.data).toEqual({
          ...mock.initIncomeStatement[1],
          type: 'variable expenses',
          created_at: expect.any(String),
          updated_at: expect.any(String),
        });
      });
    });
    describe(`Update data with the wrong schema`, () => {
      test(`given the wrong 'type', should return a 400 and error message`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ type: 'wrong type' });

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });

      test(`given title more the 100 max length, should return a 400 and error message`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ title: 'a'.repeat(101) });

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });
      test(`given 'income_statement_monthly.january' with the string data, should return a 400 and error message`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({ income_statement_monthly: { january: 'abcd' } });

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });

      test(`given '{}', should return a 400 and error message`, async () => {
        const { statusCode, body } = await supertest(app)
          .patch(`/income-statement/${mock.initIncomeStatement[1]._id}`)
          .send({});

        expect(statusCode).toBe(400);
        expect(body).toHaveProperty('code', 'bad-request');
      });
    });
  });

  describe(`DELETE '/income-statement/:id'`, () => {
    test(`Delete data does exist, should return a 200 status and the correct body`, async () => {
      const { statusCode, body } = await supertest(app).delete(
        `/income-statement/${mock.initIncomeStatement[1]._id}`
      );

      expect(statusCode).toBe(200);
      expect(body).toHaveProperty('code', 'income-statement/deleted');
    });
    test(`Delete data does not exist, should return a 404 status`, async () => {
      const id = new mongoose.Types.ObjectId().toString();
      const { statusCode } = await supertest(app).delete(
        `/income-statement/${id}`
      );

      expect(statusCode).toBe(404);
    });
    test(`Delete data with the wrong params 'id' pattern, should return a 400 status and error message`, async () => {
      const id = 'abcd';
      const { statusCode } = await supertest(app).delete(
        `/income-statement/${id}`
      );

      expect(statusCode).toBe(404);
    });
  });
});
