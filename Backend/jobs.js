const db = require("./db");

class Jobs {
  static async findAll() {
    const result = await db.query(`SELECT * FROM clients`);
    console.log(result);
    return result.rows;
  }
}

module.exports = Jobs;
