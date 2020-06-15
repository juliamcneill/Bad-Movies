DROP DATABASE IF EXISTS badmovies;

CREATE DATABASE badmovies;

USE badmovies;

CREATE TABLE favoritemovies (
  table_id int NOT NULL AUTO_INCREMENT,
  id int NOT NULL,
  title varchar(255),
  overview text,
  release_date varchar(255),
  popularity int,
  vote_average int,
  poster_path varchar(255),
  PRIMARY KEY (table_id)
);