const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// QUERY FROM A SMALL FILE TO SEE IF CODE IS WORKING //
app.get('/testuser/:id', db.getTestUserById);

// GET USER INFO FROM USERS TABLE BY ID
app.get('/users/:id', db.getUserById);

// GET ALL REVIEWS BY A USER BY USER ID
app.get('/reviews/:id', db.getReviews);

// // POST NEW USER TO USERS TABLE
// app.post('/users', db.insertUser);

// // POST NEW REVIEW TO REVIEWS TABLE
// app.post('/reviews/:id', db.insertReview);

module.exports = app;
