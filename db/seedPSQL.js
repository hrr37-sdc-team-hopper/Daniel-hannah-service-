const faker = require('faker');
const fs = require('fs');
// const path = require('path');
// const converter = require('json-2-csv');
// const config = require('./config.json');
// const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fastcsv = require('fast-csv');

// *** GENERATES FAKE DATA *** //

const generateReviews = () => {
  const reviews = [];
  const num = Math.floor(Math.random() * 5) + 1;
  for (let i = 0; i < num; i++) {
    const review = {
      date: `${faker.date.month()} ${faker.random.number({ min: 1, max: 30 })}, ${(Math.floor(Math.random() * (2019 - 1996)) + 1996)}`,
      review: faker.lorem.paragraphs(),
      rating: (Math.floor(Math.random() * 5) + 1),
      book_id: (Math.floor(Math.random() * 1000000) + 1),
    };
    reviews.push(JSON.stringify(review));
  }
  return reviews;
};

const generateUsers = () => {
  const users = [];
  for (let i = 0; i < 100000; i++) {
    const user = {
      username: faker.internet.userName(),
      avatar: faker.image.imageUrl(),
      reviews: generateReviews(),
    };
    users.push(user);
  }
  return users;
};

const writeUsers = () => {

  // ** WRITING USING CSV-WRITER - https://www.npmjs.com/package/csv-writer ** //

  // const csvWriter = createCsvWriter({
  //   path: 'users.csv',
  //   header: [
  //     { id: 'username', title: 'username' },
  //     { id: 'avatar', title: 'avatar' },
  //     { id: 'reviews', title: 'reviews' },
  //   ],
  // });

  // csvWriter
  //   .writeRecords(generateUsers())
  //   .then(() => console.log('The CSV file was written successfully'));

  // ** WRITING USING JSN2CSV - https://www.npmjs.com/package/fast-csv ** //

  // ** this deep-converts the nested reviews array - might not map back correctly ** //
  // const options = { expandArrayObjects: true };

  // converter.json2csv(generateUsers(), (err, csv) => {
  //   if (err) throw err;
  //   console.log(csv);
  // }/* , options */);


  // ** WRITING USING JSN2CSV - https://www.npmjs.com/package/json2csv ** //

  // for (let i = 0; i < 10; i++) {
  const ws = fs.createWriteStream('users_0.csv');
  const usersData = generateUsers();
  fastcsv
    .write(usersData, { headers: true })
    .pipe(ws);
  // }
};
writeUsers();

// console.log(generateUsers());

//  **  FIRST ATTEMPT AT WRITING DATA AS JSON ** //

// fs.writefile(`users_${i}.json`, JSON.stringify(usersData, null, '\t'), () => {
//   console.log(`created users_${i}.json`);
// });

// makes a json file of data in this folder
// const writeUsers = () => {
//   for (let i = 0; i < 10; i++) {
//     const usersData = generateUsers();
//     fs.writefile(`users_${i}.json`, JSON.stringify(usersData, null, '\t'), () => {
//       console.log(`created users_${i}.json`);
//     });
//   }
// };
// writeUsers();

// ** SET UP SCHEME FOR USE IN WRITING FILES ** //
// const fields = ['id', 'username', 'avatar', 'reviews.date', 'reviews.review', 'reviews.rating', 'reviews.book_id'];
