const express = require("express");
const router = express.Router();
const inquirer = require("inquirer");
const mysql = require("mysql");
const database = require("./db/joined");
const { joined } = require("./db");
