DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
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

CREATE TABLE roles (
    id AUTO_INCREMENT INT,
    role_title VARCHAR(30),
    role_ID INT,
    role_income DECIMAL,
    PRIMARY KEY (id)
);