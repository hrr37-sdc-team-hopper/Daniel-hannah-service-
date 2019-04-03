const request = require('supertest');
const app = require('../server/app');
const db = require('../db/index');
const seed = require('../db/seed');

const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + min;
};

// beforeAll(async () => {
//   await db.connection.connect();
// });
// beforeEach(async () => {
//   await seed.seedAllData();
// });
// afterEach(async () => {
//   await db.connection.query('DELETE FROM reviews');
//   await db.connection.query('DELETE FROM users');
// });
// afterAll(async () => {
//   await db.connection.end();
// });

describe('Testing routes', () => {
  beforeAll(() => {
    db.connection.connect();
  });

  afterAll((done) => {
    db.connection.end(done);
  });
});

describe('GET /books/:id/reviews', () => {
  test('It should response with status code 200', async () => {
    // request(app).get(`/books/${getRandomInt()}/reviews`).then((response) => {
    //   expect(response.statusCode).toBe(200);
    //   done();
    const response = await request(app).get(`/books/${getRandomInt()}/reviews`);
    expect(response.statusCode).toBe(200);
  });

  test('It should have property reviews on body', async () => {
    // request(app).get(`/books/${getRandomInt()}/reviews`).then((response) => {
    //   expect(response.body[0]).toEqual(expect.objectContaining({
    //     user_id: expect.any(Number),
    //     book_id: expect(response.body.book_id).toEqual(response.body.id),
    //     date: expect.any(String),
    //     review: expect.any(String),
    //     rating: expect.any(Number)
    //   }));
    // });
    const response = await request(app).get(`/books/${getRandomInt()}/reviews`);
    expect(response.body[0]).toEqual(expect.objectContaining({
      user_id: expect.any(Number),
      book_id: expect(response.body.book_id).toEqual(response.body.id),
      date: expect.any(String),
      review: expect.any(String),
      rating: expect.any(Number)
    }));
  });
});
