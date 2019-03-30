DROP DATABASE IF EXISTS bookshelf;

CREATE DATABASE bookshelf;

USE bookshelf;

-- CREATE TABLE books (
--   id int not null auto_increment,
--   PRIMARY KEY (id)
-- );

CREATE TABLE users (
  id int not null auto_increment,
  username varchar(50) not null,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  user_id INT default null,
  book_id INT default null,
  date date,
  review varchar(1000) NOT NULL,
  rating INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
    REFERENCES users (id)
  -- FOREIGN KEY (book_id)
  --   REFERENCES books (id)

);




/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql