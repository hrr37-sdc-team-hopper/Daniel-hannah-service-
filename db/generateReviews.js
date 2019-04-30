const faker = require('faker');
const fs = require('fs');

const writeReviews = fs.createWriteStream('reviews.csv');

writeReviews.write('id,userId,username,avatar,date,review,rating,likes,bookId\n', 'utf8');

const startTime = Date.now();

function writeFiftyMillionReviews(writer, encoding, callback) {
  let i = 50000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const userId = Math.floor(Math.random() * 10000000) + 1;
      const username = faker.internet.userName();
      const avatar = faker.image.avatar();
      const date = `${faker.date.month()} ${faker.random.number({ min: 1, max: 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`;
      const review = faker.lorem.sentence();
      const rating = Math.floor(Math.random() * 5) + 1;
      const likes = Math.floor(Math.random() * 800);
      const bookId = Math.floor(Math.random() * 10000000) + 1;
      const data = `${id},${userId},${username},${avatar},"${date}",${review},${rating},${likes},${bookId}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
  write();
}

writeFiftyMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
  const endTime = Date.now() - startTime;
  console.log(`Generating 50M reviews took ${endTime / 1000} seconds`);
});
