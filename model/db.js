const fs = require('fs/promises');

const employeeFileName = './employee.txt';
class DB {
  constructor() {
    this.data = [];
  }

  async show() {
    const data = await fs.readFile(employeeFileName, { encoding: 'utf-8' });
    this.data = JSON.parse(data);
    return this.data;
  }

  async update(jsonData) {
    try {
      this.data.push(jsonData);
      await fs.writeFile(employeeFileName, JSON.stringify(this.data), { encoding: 'utf-8' });
      return this.data;
    } catch (e) {
      console.log(e);
      return this.data;
    }
  }

  async connect() {
    try {
      await fs.access(employeeFileName);
      const data = await fs.readFile(employeeFileName, { encoding: 'utf-8' });
      this.data = JSON.parse(data);
    } catch (e) {
      if (e.code === 'ENOENT') {
        await fs.writeFile(employeeFileName, JSON.stringify(this.data), { encoding: 'utf-8' });
      } else {
        console.log(e);
      }
    }
  }
}

module.exports = DB;
