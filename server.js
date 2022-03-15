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
function isEmployees() {}

// /////////////////////////////////////////////////////////////
// function for viewing all roles
// /////////////////////////////////////////////////////////////
function isRoles() {}

// /////////////////////////////////////////////////////////////
// function for adding department
// /////////////////////////////////////////////////////////////
function addDepartment() {}

// /////////////////////////////////////////////////////////////
// function for adding employees
// /////////////////////////////////////////////////////////////
function addEmployee() {}

// /////////////////////////////////////////////////////////////
// function for adding role
// /////////////////////////////////////////////////////////////
function addRole() {}

// /////////////////////////////////////////////////////////////
// function for exiting app
// /////////////////////////////////////////////////////////////
function exit() {}
