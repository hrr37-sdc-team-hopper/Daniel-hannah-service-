const { Pool } = require('pg');
const { user, host, database, password, port } = require('./config.js');

const pool = new Pool({
  user: `${user}`,
  host: `${host}`,
  database: `${database}`,
  password: `${password}`,
  port: `${port}`,
});

// QUERY FROM A SMALL FILE TO SEE IF CODE IS WORKING //
const getTestUserById = (request, response) => {
  const { id } = request.params;
  console.time('getTestUserTime');
  pool.query('SELECT * FROM testuser WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw new Error(error);
    }
    console.timeEnd('getTestUserTime');
    response.status(200).json(results.rows);
  });
};

// GET USER INFO FROM USERS TABLE BY ID
const getUserById = (request, response) => {
  const { id } = request.params;
  console.time('getUserTime');
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw new Error(error);
    }
    console.timeEnd('getUserTime');
    response.status(200).json(results.rows);
  });
};

// GET ALL REVIEWS BY BOOK ID
const getReviews = (request, response) => {
  console.time('getReviewsTime');
  const bookId = request.params.id;
  pool.query('SELECT * FROM reviews WHERE bookId = $1', [bookId], (error, results) => {
    if (error) {
      throw new Error(error);
    }
    console.timeEnd('getReviewsTime');
    response.status(200).json(results.rows);
  });
};
// getReviews('5555555');
/*
console.time("Time this");
for (var i = 0; i < 10000; i++) {
  // Your stuff here
}
console.timeEnd("Time this");
*/

// IN PROGRESS //
// const insertUser = (request, response) => {
//   const { username, avatar } = request.body;

//   pool.query('INSERT INTO users (username, avatar) VALUES ($1, $2)', [username, avatar], (error, result) => {
//     if (error) {
//       throw error;
//     }
//     response.status(201).send(`User added with ID: ${result.id}`);
//   });
// };

// const insertReview = (request, response) => {
//   // eslint-disable-next-line object-curly-newline
//   const { userId, review, rating, date, bookId } = request.body;

//   pool.query('insert into reviews (userId, review, rating, date, bookId) values ($1, $2, $3, $4, $5)', [userId, review, rating, date, bookId], (error, result) => {
//     if (error) {
//       throw error;
//     }
//     response.status(201).send(`User added with ID: ${result.id}`);
//   });
// };

module.exports = {
  getTestUserById,
  getUserById,
  getReviews,
  // insertUser,
  // insertReview,
};
