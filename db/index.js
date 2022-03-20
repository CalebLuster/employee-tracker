const connection = require("./connection");

class DataBase {
  constructor(connection) {
    this.connection = connection;
  }
  findEmployees() {
    return this.connection.query("SELECT * FROM employee.employees");
  }
}

module.exports = new DataBase(connection);
