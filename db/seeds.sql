USE company;

INSERT INTO employees (id, employee_name, employee_lastname, employee_role, employee_ID)
VALUES
(1, "Caleb", "Luster", "Co-Owner", "1"),
(2, "Abby", "Nordstrom", "Co-Owner", "2"),
(3, "Skylar", "Carr", "General-Manager", "3"),
(4, "Josh", "Balster", "Assisant-Manager", "4"),
(5, "Jayme", "Lien", "Team-Member", "5"),
(6, "Gavin", "Hoffman", "Team-Member", "6"),
(7, "Jayden", "Watts", "Team-Member", "7"),
(8, "Brooke", "Watts", "Team-Member", "8"),
(9, "Seth", "Carr", "Team-Member", "9"),

INSERT INTO department(department_name, department_ID)
VALUES
("Roasters", "1"),
("Baristas", "2"),
("Management", "3"),

INSERT INTO roles(role_title, role_ID, role_income)
VALUES
("Roast Master", 1, 120000),
("Coffee Master", 2, 80000),
("Management Team", 3, 250000),