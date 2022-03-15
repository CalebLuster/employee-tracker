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
  inquirer.prompt([
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
 ]).then((inquirerAnswers) => {
     switch (inquirerAnswers.choice) {
         
     }
 })



}

