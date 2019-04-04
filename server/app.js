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

// app.get('/books/:id/users', async (req, res) => {
//   console.log(req.body)
//   const { userId } = req.body;
//   try {
//     const user = await db.getUser(userId);
//     res.json(user);
//   } catch (err) {
//     res.json(err);
//   }
// });

app.get('/books/:id/users', async (req, res) => {
  // const { id } = req.params;
  try {
    const users = await db.getAllUsers();
    res.json(users);
  } catch (err) {
    res.json(err);
  }
});

// post review for specific book and get back all reviews w/ new review added
app.post('/books/:id/reviews', async (req, res) => {
  const id = parseInt(req.params.id);
  const myRating = parseInt(req.body.myRating);
  const { review } = req.body;
  // const { id } = req.params;

  try {
    await db.postReview(review, myRating, id);
    const reviews = await db.getReviews(id);
    res.json(reviews);
  } catch (err) {
    res.json(err);
  }
});

module.exports = app;
