const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/books/:id', express.static(__dirname + '/../client/dist'));

// get and post routes to interact with database here

// get all reviews
app.get('/books/:id/reviews', (req, res, next) => {
  const { id } = req.params;
  db.getReviews(id).then((reviews) => {
    res.send(reviews);
  })
    .catch(next);
});

// get reviews w/ specific rating
app.get('books/:id/reviews/:rating', (req, res, next) => {
  const { id, rating } = req.params;

  console.log(id, 'IDDDD');
  console.log(rating, 'RATINGGGGG');
  db.getRatedReviews(id, rating).then((ratedReviews) => {
    res.send(ratedReviews);
  })
    .catch(next);
});

// post review
app.post('books/:id/reviews', (req, res) => {
  const { id } = req.params;
  const { review, rating } = req.body;

  db.postReview(id, review, rating).then(() => {
    db.getReviews(id);
  }).then((reviews) => {
    res.send(reviews);
  });
});


module.exports = app;
