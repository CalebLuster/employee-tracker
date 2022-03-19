const express = require("express");
const router = express.Router();
const inquirer = require("inquirer");
const mysql = require("mysql");
const database = require("./db/joined");
const { joined } = require("./db");

database.connect(async function () {
  startApp();
});

function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to start with today?",
        choices: [
          "View Departments",
          "View Employees",
          "View Roles",
          "Add Department",
          "Add Employee",
          "Add Role",
          "Exit",
        ],
      },
    ])
    // runs the corresponding function to the users selected choice
    .then((inquirerAnswers) => {
      switch (inquirerAnswers.choice) {
        case "View Departments":
          isDepartments();
          break;
        case "View Employees":
          isEmployees();
          break;
        case "View Roles":
          isRoles();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Exit":
          exit();
          break;
      }
    });
}

// /////////////////////////////////////////////////////////////
// function for viewing all departments.
// /////////////////////////////////////////////////////////////
function isDepartments() {
  const call = "SELECT * FROM department";
  database.query(call, function (error, res) {
    if (error) throw error;
    console.log("Here are all of the department!");
    console.table(res);
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Would you like to exit or go back to the starting page?",
          choices: ["Start", "Exit"],
        },
      ])
      .then((inquirerAnswers) => {
        switch (inquirerAnswers.choice) {
          case "Start":
            startApp();
            break;
          case "Exit":
            exit();
            break;
        }
      });
  });
}

// /////////////////////////////////////////////////////////////
// function for viewing all employees
// /////////////////////////////////////////////////////////////
function isEmployees() {
  const call = "SELECT * FROM employees";
  database.query(call, function (error, res) {
    if (error) throw error;
    console.log("Here are all of the employees!");
    console.table(res);
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Would you like to exit or go back to the starting page?",
          choices: ["Start", "Exit"],
        },
      ])
      .then((inquirerAnswers) => {
        switch (inquirerAnswers.choice) {
          case "Start":
            startApp();
            break;
          case "Exit":
            exit();
            break;
        }
      });
  });
}

// /////////////////////////////////////////////////////////////
// function for viewing all roles
// /////////////////////////////////////////////////////////////
function isRoles() {
  const call = "SELECT * FROM roles";
  database.query(call, function (error, res) {
    if (error) throw error;
    console.log("Here are all of the Roles!");
    console.table(res);
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Would you like to exit or go back to the starting page?",
          choices: ["Start", "Exit"],
        },
      ])
      .then((inquirerAnswers) => {
        switch (inquirerAnswers.choice) {
          case "Start":
            startApp();
            break;
          case "Exit":
            exit();
            break;
        }
      });
  });
}

// /////////////////////////////////////////////////////////////
// function for adding department
// /////////////////////////////////////////////////////////////
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "AddDepartment",
        message: "Enter the department name you would like to add.",
      },
      {
        type: "input",
        name: "AddDepartmentID",
        message: "Enter the departments ID number",
      },
    ])
    .then(function (userInput) {
      joined.query(
        "INSERT INTO department(department_name, department_ID) VALUES(?,?)",
        [userInput.AddDepartment, userInput.AddDepartmentID],
        function (error, userInput) {
          console.log(error);
          if (error) throw error;
          console.table(userInput);
          inquirer
            .prompt([
              {
                type: "list",
                name: "choice",
                message:
                  "Would you like to exit or go back to the starting page?",
                choices: ["Start", "Exit"],
              },
            ])
            .then((inquirerAnswers) => {
              switch (inquirerAnswers.choice) {
                case "Start":
                  startApp();
                  break;
                case "Exit":
                  exit();
                  break;
              }
            });
        }
      );
    });
}

// /////////////////////////////////////////////////////////////
// function for adding employees
// /////////////////////////////////////////////////////////////
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "AddEmployeeName",
        message: "Enter the employees name.",
      },
      {
        type: "input",
        name: "AddEmployeeLastName",
        message: "Enter the employees last name.",
      },
      {
        type: "input",
        name: "AddEmployeeRole",
        message: "Enter the employees role.",
      },
      {
        type: "input",
        name: "AddEmployeeID",
        message: "Enter the employees ID number",
      },
    ])
    .then(function (userInput) {
      joined.query(
        "INSERT INTO employees(employee_name, employee_lastname, employee_role, employee_ID) VALUES(?,?,?,?)",
        [
          userInput.AddEmployeeName,
          userInput.AddEmployeeLastName,
          userInput.AddEmployeeRole,
          userInput.AddEmployeeID,
        ],
        function (error, userInput) {
          console.log(error);
          if (error) throw error;
          console.table(userInput);
          inquirer
            .prompt([
              {
                type: "list",
                name: "choice",
                message:
                  "Would you like to exit or go back to the starting page?",
                choices: ["Start", "Exit"],
              },
            ])
            .then((inquirerAnswers) => {
              switch (inquirerAnswers.choice) {
                case "Start":
                  startApp();
                  break;
                case "Exit":
                  exit();
                  break;
              }
            });
        }
      );
    });
}

// /////////////////////////////////////////////////////////////
// function for adding role
// /////////////////////////////////////////////////////////////
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "AddRoleTitle",
        message: "Enter the new roles title.",
      },
      {
        type: "input",
        name: "AddRoleID",
        message: "Enter the Roles ID number.",
      },
      {
        type: "input",
        name: "AddRoleIncome",
        message: "Enter the Roles annual income.",
      },
    ])
    .then(function (userInput) {
      joined.query(
        "INSERT INTO roles(role_title, role_ID, role_income) VALUES(?,?,?)",
        [userInput.AddRoleTitle, userInput.AddRoleID, userInput.AddRoleIncome],
        function (error, userInput) {
          console.log(error);
          if (error) throw error;
          console.table(userInput);
          inquirer
            .prompt([
              {
                type: "list",
                name: "choice",
                message:
                  "Would you like to exit or go back to the starting page?",
                choices: ["Start", "Exit"],
              },
            ])
            .then((inquirerAnswers) => {
              switch (inquirerAnswers.choice) {
                case "Start":
                  startApp();
                  break;
                case "Exit":
                  exit();
                  break;
              }
            });
        }
      );
    });
}

// /////////////////////////////////////////////////////////////
// function for exiting app
// /////////////////////////////////////////////////////////////
function exit() {
  console.log("Exiting app, Have a good rest of your day!");
  process.exit();
}
