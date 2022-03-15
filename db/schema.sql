DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

CREATE TABLE department (
    id AUTO_INCREMENT INT,
    department_name VARCHAR(30) NOT NULL,
    department_ID INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id AUTO_INCREMENT INT,
    employee_name VARCHAR(30),
    employee_lastname VARCHAR(30),
    employee_role INT VARCHAR(30),
    employee_ID INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id AUTO_INCREMENT INT,