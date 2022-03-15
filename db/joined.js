const mysql = require("mysql");
const joined = mysql.createConnection({
  host: "localhost",
  database: "company",
  user: "root",
  password: "",
});

module.exports = joined;
