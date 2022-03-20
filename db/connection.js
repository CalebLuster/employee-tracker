const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  database: "company",
  user: "root",
  password: "Pocketmoney17",
});

module.exports = connection;
