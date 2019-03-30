const faker = require('faker');

const createFakeUser = () => ({
  username: faker.internet.userName(),
  avatar: faker.image.imageUrl()
});

const createFakeReviews = () => ({
  date: faker.date.past(),
  text: faker.lorem.paragraphs()
})

const createFakeRatings = () => {
  Math.floor(Math.random() * 5) + 1
}

for (let i = 0; i < 99; i++) {
  let queryString = 'INSERT INTO users (username) VALUES (?)'

}



module.exports = {
  createFakeUser,
  createFakeReviews,
  createFakeRatings
}