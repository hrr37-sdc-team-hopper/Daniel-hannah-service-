const mysql = require('mysql');
const config = require('./config.js');
const faker = require('faker');
// const data = require('./data-functions.js')
const connection = mysql.createConnection(config);

const getReviews = (id) => {
  return new Promise((resolve, reject) => {
    const queryString = 'select * from reviews where id = ?'
    connection.query(queryString, id, (err, result) => {
      if (err) { reject (err) }
      resolve(result)
    })
  })
}



const getRatedReviews = (id, rating) => {
  return new Promise((resolve, reject) => {
    const queryString = "select * from reviews where (id = ?, rating = ?)"
    let params = [id, rating];
    connection.query(queryString, params, (err, result) => {
      if (err) { reject (err) }
      resolve(result)
    });
  })
}

const postReview = (id, review, rating) => {
  const queryString = 'insert into reviews (review, rating) values (?, ?) where id = ?'
}

const createFakeUser = () => ({
  username: faker.internet.userName(),
  // avatar: faker.image.imageUrl()
});

const seedUsers = async (func) => {
  for (let i = 0; i < 100; i++) {
    let queryString = 'INSERT INTO users (username) VALUES (?)'
    let user = createFakeUser();
    connection.query(queryString, user.username);
  }
  await createReviews();
}

const createReviews = async () => {
  let reviews = [];
  for (let i = 0; i < 100; i++ ) {
    let review = {};
    review.date = faker.date.past();
    review.review = faker.lorem.paragraph();
    review.rating = ( Math.floor(Math.random() * 5) + 1 );
    review.book_id = ( Math.floor(Math.random() * 100) + 1 );
    review.user_id = ( Math.floor(Math.random() * 100) + 1 );
    reviews.push(review)
    }
    await seedReviews(reviews);
  }

const seedReviews = (reviews) => {
    reviews.forEach((review) => {
      let queryString = 'insert into reviews (date, review, rating, book_id, user_id) values (?, ?, ?, ?, ?)';
      let params = [review.date, review.review, review.rating, review.book_id, review.user_id];
      connection.query(queryString, params)
  })
}


seedUsers()
.then(() => {
  let queryString = 'select count(*) as count from users';
  connection.query(queryString, (err, result) => {
    if (err){console.log(err)}
    if (result[0].count === 100) {
      connection.end();
    }
  });
})


connection.connect((err) => {
  if (err) {
    console.log(err, 'ERROR')
  }
  console.log('connected')
})

module.exports = {
  connection,
  getReviews,
  getRatedReviews,
  postReview
}