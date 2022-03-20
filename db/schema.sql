DROP DATABASE IF EXISTS company;
CREATE DATABASE company;
USE company;

CREATE TABLE department (
    id INT AUTO_INCREMENT,
    roles_id INT,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    employee_name VARCHAR(30),
    employee_lastname VARCHAR(30),
    roles_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);
