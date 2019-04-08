const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/books/:id', express.static(path.join(__dirname, '/../public')));

// get and post routes to interact with database here

// get all reviews for specific book id
app.get('/books/:id/reviews', async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await db.getReviews(id);
    res.json(reviews);
  } catch (err) {
    res.json(err);
  }
});

// get reviews for specific book w/ specific rating
app.get('/books/:id/reviews/:rating', async (req, res) => {
  const { id, rating } = req.params;
  try {
    const ratedReviews = await db.getRatedReviews(id, rating);
    res.json(ratedReviews);
  } catch (err) {
    res.json(err);
  }
});

// get all users
app.get('/books/:id/users', async (req, res) => {
  try {
    const users = await db.getAllUsers();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

// post review for specific book and send back updated reviews
app.post('/books/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { rating, review, user_id } = req.body;
  try {
    const posted = await db.postReview(review, rating, id, user_id);
    res.json(posted);
  } catch (err) {
    console.log(err);
  }
});

// increment likes when someone likes a review
app.put('/books/:id/reviews', async (req, res) => {
  const { reviewId } = req.body;
  try {
    await db.addLike(reviewId);
    res.json();
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
