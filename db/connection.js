const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  database: "company",
  user: "root",
  password: "",
});

module.exports = connection;
