DROP DATABASE IF EXISTS bookshelf;

CREATE DATABASE bookshelf;

-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL,
--   username VARCHAR NOT NULL,
--   avatar VARCHAR,
--   CONSTRAINT users_pkey PRIMARY KEY (id)
-- );

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL,
  userId INTEGER NOT NULL,
  username VARCHAR NOT NULL,
  avatar VARCHAR,
  date  VARCHAR(20),
  review VARCHAR,
  rating SMALLINT,
  likes SMALLINT,
  bookId INTEGER NOT NULL,
  CONSTRAINT reviews_pkey PRIMARY KEY (id),
);

CREATE INDEX idx_bookId ON reviews(bookId);
