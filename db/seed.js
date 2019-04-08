const faker = require('faker');
const db = require('./index.js');
const { connection } = require('./index.js');

const seedUsers = async () => {
  for (let i = 0; i < 100; i++) {
    const user = {
      username: faker.internet.userName(),
      avatar: `https://du1ex6u29s822.cloudfront.net/image-${i+1}.png`
    };
    await db.insertUser(user);
  }
  await db.insertUser({username: 'Demo_User', avatar:`https://du1ex6u29s822.cloudfront.net/image-101.png`})
};

// const seedUsers = async () => {
//   let promisesToAwait = [];
//   for (let i = 0; i < 100; i++) {
//     let user = { username: faker.internet.userName() };
//     promisesToAwait.push(db.insertUser(user));
//     // await db.insertUser(user);
//   }
//   await Promise.all(promisesToAwait);
// };


const seedReviews = async () => {
  for (let i = 0; i < 1000; i++) {
    const review = {};
    review.date = faker.date.month() + ' ' + faker.random.number({'min': 1, 'max':30}) + ', ' + (Math.floor(Math.random() * (2019-1996)) + 1996);
    review.review = faker.lorem.paragraphs();
    review.rating = (Math.floor(Math.random() * 5) + 1);
    review.book_id = (Math.floor(Math.random() * 100) + 1);
    review.user_id = (Math.floor(Math.random() * 100) + 1);
    await db.insertReview(review);
  }
};

const seedAllData = async () => {
  await seedUsers();
  await seedReviews();
};

seedAllData().then(() => {
  console.log('seeding is finished!');
  connection.end();
});

module.exports = {
  seedAllData
};
