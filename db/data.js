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




module.exports = {
  createFakeUser,
  createFakeReviews,
  createFakeRatings
}