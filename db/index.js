const joined = require("./joined");

class DataBase {
  constructor(joined) {
    this.joined = joined;
  }
  findEmployees() {
    return this.joined.query("SELECT * FROM employee.employees");
  }
}

module.exports = new DataBase(joined);
