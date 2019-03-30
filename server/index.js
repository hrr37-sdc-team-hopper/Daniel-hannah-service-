const express = require('express');
const db = require('../db');
const bodyParser = require('body-parser')

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../client/dist'))

// get and post routes to interact with database here

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})