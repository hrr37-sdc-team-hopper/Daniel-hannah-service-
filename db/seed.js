const db = require('./index.js');
const faker = require('faker');
const connection = require('./index.js').connection;

const seedUsers = async () => {
  for (let i = 0; i < 100; i++) {
    let user = {username: faker.internet.userName()}
    await db.insertUser(user);
  }
}

const seedReviews = async () => {
  for (let i = 0; i < 100; i++) {
    let review = {};
    review.date = faker.date.past();
    review.review = faker.lorem.paragraph();
    review.rating = ( Math.floor(Math.random() * 5) + 1 );
    review.book_id = ( Math.floor(Math.random() * 100) + 1 );
    review.user_id = ( Math.floor(Math.random() * 100) + 1 );
    await db.insertReview(review);
  }

const seedAllData = async () => {
  await seedUsers();
  await seedReviews();
}

seedAllData().then(() => {
  console.log('seeding is finished!')
  connection.end();
  })
}