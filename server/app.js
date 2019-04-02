const express = require('express');
const db = require('../db');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/books/:id', express.static(__dirname + '/../client/dist'))

// get and post routes to interact with database here

// get all reviews
app.get('/books/:id/reviews', (req, res, next) => {
  const id = req.params.id;
  db.getReviews(id).then((reviews) => {
    res.send(reviews)
  })
  .catch(next)
})

// get reviews w/ specific rating
app.get('books/:id/reviews/:rating', (req, res, next) => {
  const id = req.params.id;
  const rating = req.params.rating;
  console.log(id, 'IDDDD')
  console.log(rating, 'RATINGGGGG')
  db.getRatedReviews(id, rating).then((ratedReviews) => {
    res.send(ratedReviews)
  })
  .catch(next);
})

// post review
app.post('books/:id/reviews', (req, res) => {
  const id = req.params.id;
  // grab review text
  // grab review rating
  db.postReview(id, review, rating)
})


module.exports = app;