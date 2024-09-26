-- Active: 1724577491397@@127.0.0.1@3306
CREATE DATABASE mealSharingPlatform
    DEFAULT CHARACTER SET = 'utf8mb4';

USE mealSharingPlatform;

CREATE TABLE meal (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_date DATE NOT NULL
);

CREATE TABLE reservation (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATETIME NOT NULL,
    contact_phonenumber VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255) UNIQUE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);

CREATE TABLE review (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    meal_id INT NOT NULL,
    stars INT NOT NULL,
    created_date DATE NOT NULL,
    FOREIGN KEY (meal_id) REFERENCES meal(id)
);