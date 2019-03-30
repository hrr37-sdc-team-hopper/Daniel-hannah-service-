const express = require('express');
const db = require('../db');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/books/:id', express.static(__dirname + '/../client/dist'))

// get and post routes to interact with database here

// get all reviews
app.get('/books/:id/reviews', (req, res) => {
  const id = req.params.id;

})

// get reviews w/ specific rating
app.get('books/:id/reviews/:rating', (req, res) => {
  const id = req.params.id;
  const rating = req.params.rating;
})

// post review
app.post('books/:id/reviews', (req, res) => {
  const id = req.params.id;

})


module.exports = app;