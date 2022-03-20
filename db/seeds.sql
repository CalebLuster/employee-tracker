USE company;

INSERT INTO employees(id, employee_name, employee_lastname, roles_id, manager_id)
VALUES
(1, "Caleb", "Luster", "1", "1"),
(2, "Abby", "Nordstrom", "2", "2"),
(3, "Skylar", "Carr", "3", "3"),
(4, "Josh", "Balster", "4", "4"),
(5, "Jayme", "Lien", "5", "5"),
(6, "Gavin", "Hoffman", "1", "1"),
(7, "Jayden", "Watts", "2", "2"),
(8, "Brooke", "Watts", "3", "3"),
(9, "Seth", "Carr", "4", "4");

INSERT INTO department(department_name, roles_id)
VALUES
("Roasters", "1"),
("Baristas", "2"),
("Management", "3");

INSERT INTO roles(title, salary, department_id)
VALUES
("Roast Master", 120000, 1),
("Coffee Master", 280000, 2),
("Management Team", 250000, 3);