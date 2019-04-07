DROP DATABASE IF EXISTS bookshelf;

CREATE DATABASE bookshelf;

USE bookshelf;

-- CREATE TABLE books (
--   id int not null auto_increment,
--   PRIMARY KEY (id)
-- );

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL,
  avatar varchar(500),
  PRIMARY KEY (id)
);


CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  user_id INT,
  book_id INT,
  date varchar(100),
  review varchar(5000) NOT NULL,
  rating INT NOT NULL,
  likes INT default 0,
  PRIMARY KEY (id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql