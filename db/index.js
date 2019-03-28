const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);


// functions to query from database






connection.connect((err) => {
  if (err) {
    console.log(err, 'ERROR')
  }
  console.log('connected')
})

exports.connection = connection;