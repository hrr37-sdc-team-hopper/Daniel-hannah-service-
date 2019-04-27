const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// note: original client code has getAllUsers that was invoked on componentDidMount and cached in state. This will need to be optimized for 10M records. Probably by only retrieving the data on a per book basis. One idea is to get rid of the users table altogether and adding the user info as properties of each review

// GET ALL REVIEWS FOR A BOOK BY BOOK ID
app.get('/books/:id/reviews', db.getReviews);

// GET REVIEWS FOR SPECIFIC BOOK BASED ON RATING
app.get('/books/:id/reviews/:rating', db.getReviewsByRating);

// GET USER INFO BY ID
app.get('/books/:id/users', db.getUserById);

// POST NEW REVIEW TO REVIEWS TABLE
app.post('/books/:id/reviews', db.insertReview);

// INCREMENT REVIEW LIKES
app.put('/books/:id/reviews', db.addLike);

// DELETE REVIEW
app.delete('/books/:id/reviews', db.deleteReview);

module.exports = app;
