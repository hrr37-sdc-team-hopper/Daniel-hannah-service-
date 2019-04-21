const faker = require('faker');
const fs = require('fs');

const writeStream = fs.createWriteStream('data.csv');

// *** SETS UP HEADERS FOR CSV FILE *** //
// writeStream.write('id', 'username', 'avatar', 'reviews\n', 'utf8');

// THIS GENERATES AN ARRAY 5 OBJECTS FOR THE REVIEWS PROPERTY OF EACH USER //
// THERE MAY BE ISSUES WITH THIS LATER - I've placed some ideas below//

const generateReviews = () => {
  const reviews = [];
  // const num = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < 5; i++) {
    const review = {
      date: `${faker.date.month()} ${faker.random.number({ min: 1, max: 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`,
      review: faker.lorem.paragraphs(),
      rating: (Math.floor(Math.random() * 5) + 1),
      book_id: (Math.floor(Math.random() * 1000000) + 1),
    };
    reviews.push(review);
  }
  return reviews;
};

const startTime = Date.now();

function writeOneMillionTimes(writer, encoding, callback) {
  let i = 10000000;

  function write() {
    let ok = true;
    do {
      i -= 1;
      let id = i;
      let username = faker.internet.userName();
      let avatar =  faker.image.avatar();
      let reviews = generateReviews();
      let data = `${id},${username},${avatar},${reviews[0]},${reviews[1]},${reviews[2]},${reviews[3]},${reviews[4]}\n`;
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

writeOneMillionTimes(writeStream, 'utf-8', () => {
  writeStream.end();
  const finalTime = Date.now() - startTime;
  console.log(`write time took ${finalTime / 1000} seconds`);
});


// *** I might use something like this for the headers, I'll have to see how it come out on the other end ***//
// writeStream.write('id', 'username', 'avatar', 'reviews.date', 'reviews.review', 'reviews.rating', 'reviews.book_id', 'utf8');

// let date = `${faker.date.month()} ${faker.random.number({ min: 1, max: 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`;
// let review = faker.lorem.paragraphs();
// let rating = (Math.floor(Math.random() * 5) + 1);
// let book_id = (Math.floor(Math.random() * 1000000) + 1);