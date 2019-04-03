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
  console.log(id);
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
    const sql = 'select * from reviews where (id = ?, rating = ?)';
    const params = [id, rating];
    connection.query(sql, params, (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    });
  });
};


const postReview = (id, review, rating) => {
  return new Promise((resolve, reject) => {
    const sql = 'insert into reviews (review, rating) values (?, ?) where id = ?';
    const params = [id, review, rating];
    connection.query(sql, params, (err, result) => {
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
