// const fs = require('fs/promises');
const DBInstance = require('./DBInstance');

class Employee {
  constructor(employeeData) {
    this.data = {};
    this.employeeFileName = './employee.txt';
    this.data = employeeData;
  }

  async save() {
    const db = await DBInstance();
    let dbData = await db.show();
    dbData.forEach((e) => {
      if (e.id == this.data.id) throw new Error('ID should be unique');
    });
    dbData = db.update(this.data);
    return this.data;
  }

  static async getEmployees() {
    const db = await DBInstance();
    const employees = await db.show();
    console.log(employees);
    return employees;
  }

  static async getEmployee(id) {
    const db = await DBInstance();
    const employees = await db.show();
    const employee = employees.find((e) => e.id == id);
    console.log(employee);
    return employee;
  }

  show() {
    return this.data;
  }
}

module.exports = Employee;
