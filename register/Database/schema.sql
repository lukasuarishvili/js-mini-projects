CREATE DATABASE IF NOT EXISTS users_db;

SHOW DATABASES;

USE  users_db;

CREATE TABLE if not exists  users
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(100) NOT NULL,
    surname  VARCHAR(100) NOT NULL,
    email    VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

insert into users (id, name, surname, email, password)
values (25,'arzeni','muskia','fake@gmail.com','01928374');

SELECT COUNT(*) AS count FROM users WHERE email =email ;


SELECT * FROM users
