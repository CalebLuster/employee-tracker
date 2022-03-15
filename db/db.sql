DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

CREATE TABLE employees (
    id AUTO_INCREMENT INT NOT NULL,
    employee_name VARCHAR(30) NOT NULL,
    employee_lastname VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);