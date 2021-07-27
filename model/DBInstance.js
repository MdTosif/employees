const DB = require('./db');

class DBInstance {
  static async getDBInstance() {
    if (!DBInstance.instance) {
      const db = new DB();
      await db.connect();
      DBInstance.instance = db;
    }
    return DBInstance.instance;
  }
}

module.exports = DBInstance.getDBInstance;
