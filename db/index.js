const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log(err, 'ERROR CONNECTING');
  } else {
    console.log('connected');
  }
});

const insertUser = (user) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO users (username) VALUES (?)';
    connection.query(sql, user.username, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};

const insertReview = (review) => {
  return new Promise((resolve, reject) => {
    const sql = 'insert into reviews (user_id, book_id, date, review, rating) values (?, ?, ?, ?, ?)';
    const params = [review.user_id, review.book_id, review.date, review.review, review.rating];
    connection.query(sql, params, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};

const getReviews = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'select * from reviews where book_id = ?';
    connection.query(sql, id, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};

const getRatedReviews = (id, rating) => {
  return new Promise((resolve, reject) => {
    const params = [id, rating];
    const sql = 'select * from reviews where (book_id = ?) and (rating = ?)';
    connection.query(sql, params, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};


const postReview = (review, rating, id) => {
  console.log(review, 'REVIEW');
  console.log(rating, 'RATING');
  console.log(id, 'IDDDD');

  return new Promise((resolve, reject) => {
    const params = [review, rating, id];
    const sql = 'insert into reviews (review, rating) values (?, ?) where book_id = ?';
    connection.query(sql, params, (err, result) => {
      console.log(params, 'PARAMS');
      if (err) { reject(err); }
      resolve(result);
    });
  });
};


module.exports = {
  insertUser,
  insertReview,
  getReviews,
  getRatedReviews,
  postReview,
  connection
};
