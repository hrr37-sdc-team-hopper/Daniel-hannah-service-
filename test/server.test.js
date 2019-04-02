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

describe('GET /books/:id/reviews', () => {
  test('It should response with status code 200', () => {
    // const response = await request(app).get(`/books/${getRandomInt}/reviews`);
    // expect(response.body.statusCode).toBe(200);
    request(app).get(`/books/${getRandomInt}/reviews`).then((response) => {
      expect(typeof response.params.id).toBe('number');
    }).then((response) => {
      expect(response.body.statusCode).toBe(200);
    });
  });

  test('It should have property reviews on body', () => {
    request(app).get(`/books/${getRandomInt}/reviews`).then((response) => {
      expect(response.body[0]).toEqual(expect.objectContaining({
        user_id: expect.any(Number),
        book_id: expect.toBe(response.params.id),
        date: expect.any(String),
        review: expect.any(String),
        rating: expect.any(Number)
      }));
    });
    // const reviews = response.body.reviews;
    // await expect(response.body[0]).toEqual(expect.objectContaining({
    //   user_id: expect.any(Number),
    //   book_id: expect.toBe(id),
    //   date: expect.any(String),
    //   review: expect.any(String),
    //   rating: expect.any(Number)
    // }));
  });
});
