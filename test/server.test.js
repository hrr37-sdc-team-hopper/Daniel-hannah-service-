const request = require('supertest');
const app = require('../server/app');
const db = require('../db/index');
const seed = require('../db/seed');

// describe('Testing routes', () => {
//   beforeAll(() => {
//     db.connection.connect();
//   });

//   afterAll((done) => {
//     db.connection.end(done);
//   });
// });

// describe('GET /books/:id/reviews', () => {
//   test('It should response with status code 200', async () => {
//     // request(app).get(`/books/${getRandomInt()}/reviews`).then((response) => {
//     //   expect(response.statusCode).toBe(200);
//     //   done();
//     const response = await request(app).get(`/books/${getRandomInt(1, 100)}/reviews`);
//     expect(response.statusCode).toBe(200);
//   });

//   test('It should have property reviews on body', async () => {
//     const response = await request(app).get(`/books/${getRandomInt(1, 100)}/reviews`);
//     expect(response.body[0]).toEqual(expect.objectContaining({
//       user_id: expect.any(Number),
//       book_id: expect(response.body.book_id).toBe(response.body.id),
//       date: expect.any(String),
//       review: expect.any(String),
//       rating: expect.any(Number)
//     }));
//   });
// });


const testReviews = [
  {
    user_id: 1,
    book_id: 1,
    date: Date(),
    review: 'This is a fake review for testing purposes.',
    rating: 5
  },
  {
    user_id: 2,
    book_id: 1,
    date: Date(),
    review: 'This is another fake review!',
    rating: 2
  },
  {
    user_id: 3,
    book_id: 2,
    date: Date(),
    review: 'Yet another fake review for my fake reviews array.',
    rating: 3
  }
];

const testUser = {
  username: 'Fake User'
};

const reviewsById = (id) => {
  let reviewsWithId = [];
  testReviews.forEach((review) => {
    if (review.book_id === id) {
      reviewsWithId.push(review);
    }
    return reviewsWithId;
  });
};

describe('GET /books/:id/reviews', () => {
  test('It should get all reviews', () => {
    const response = request(app).get('/books/1/reviews');
    expect(response.body).toBe(reviewsById(1));
  });
});

describe('POST /books/:id', () => {
  test('It should post a review and get all reviews', () => {
    const response = request(app).post('/books/1');
    expect(response.body).toBe();
  });
});
