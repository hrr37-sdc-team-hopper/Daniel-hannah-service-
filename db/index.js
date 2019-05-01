const { Pool } = require('pg');
const { user, host, database, password, port } = require('./config.js');

const pool = new Pool({
  user: `${user}`,
  host: `${host}`,
  database: `${database}`,
  password: `${password}`,
  port: `${port}`,
});

// GET ALL REVIEWS BY BOOK ID
const getReviews = (request, response) => {
  // console.time('getReviewsTime');
  const bookId = request.params.id;
  pool.query('SELECT * FROM reviews WHERE bookId = $1', [bookId], (error, results) => {
    if (error) {
      return response.status(500).send(error);
    }
    // console.timeEnd('getReviewsTime');
    return response.status(200).json(results.rows);
  });
};

// GET ALL REVIEWS BY BOOK ID AND RATING **could we just sort the ones we have?
const getReviewsByRating = (request, response) => {
  // console.time('getReviewsTime');
  const { id, rating } = request.params;
  pool.query('SELECT * FROM reviews WHERE bookId = $1 AND rating = $2', [id, rating], (error, results) => {
    if (error) {
      return response.status(500).send(error);
    }
    // console.timeEnd('getReviewsTime');
    return response.status(200).json(results.rows);
  });
};

// // GET USER INFO FROM USERS TABLE BY ID
// const getUserById = (request, response) => {
//   const { id } = request.params;
//   // console.time('getUserTime');
//   pool.query('SELECT * FROM testuser WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     // console.timeEnd('getUserTime');
//     return response.status(200).json(results.rows);
//   });
// };

// POST NEW REVIEW
const insertReview = (request, response) => {
  const { userId, review, rating, date, bookId } = request.body;
  // console.time('postReviewTime');
  pool.query('INSERT INTO reviews (userId, review, rating, date, bookId) VALUES ($1, $2, $3, $4, $5)', [userId, review, rating, date, bookId], (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    // console.timeEnd('postReviewTime');
    return response.status(201).send('Review posted');
  });
};

// DELETE A REVIEW
const deleteReview = ((request, response) => {
  const { id } = request.params;
  // console.time('deleteReviewTime');
  pool.query('DELETE FROM reviews WHERE id = $1', [id], (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    // console.timeEnd('deleteReviewTime');
    return response.status(200).send(`Review ${id} deleted. `);
  });
});

// LIKE A REVIEW
const addLike = (request, response) => {
  // console.time('addLikeTime');
  const reviewId = request.params.id;
  // console.log(reviewId);
  pool.query('UPDATE reviews SET likes = likes + 1 WHERE id = $1', [reviewId], (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    // console.timeEnd('addLikeTime');
    return response.status(200).send(`Review ${reviewId} liked!`);
  });
};

module.exports = {
  getReviews,
  getReviewsByRating,
  // getUserById,
  addLike,
  insertReview,
  deleteReview,
};
