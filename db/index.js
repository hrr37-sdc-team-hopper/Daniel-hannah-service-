const Pool = require('pg').Pool

const pool = new Pool({
  user: 'daniel',
  host: 'localhost',
  database: 'bookshelf',
  password: 'thomas',
  port: 5432,
});

const getTestUserById = (request, response) => {
  const { id } = request.params;
  const time = Date.now();
  pool.query('SELECT * FROM testuser WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);
    }
    console.log(`total query time was ${Date.now() - time}ms`);
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const { id } = request.params;
  const time = Date.now();
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);
    }
    console.log(results.rows);
    console.log(`total query time was ${Date.now() - time}ms`);
    response.status(200).json(results.rows);
  });
};

const getReviews = (request, response) => {
  const time = Date.now();
  const bookId = request.params.id;
  console.log(`bookId=${bookId}`);
  pool.query('SELECT * FROM reviews WHERE bookId = $1', [bookId], (error, results) => {
    if (error) {
      console.log(error);
    }
    console.log(results.rows);
    console.log(`total query time was ${Date.now() - time}ms`);
    response.status(200).json(results.rows);
  });
};

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
