const db = require("./db");

class Jobs {
  static async findAll(searchFilter = {}) {
    const { role } = searchFilter;

    let query = `SELECT * FROM clients`;

    let whereExpressions = [];
    let queryValues = [];

    if (role) {
      queryValues.push(`%${role}%`);
      whereExpressions.push(`role ILIKE $${queryValues.length}`);
    }

    query += "ORDER BY role";
    const companiesRes = await db.query(query, queryValues);
    return companiesRes.rows;
  }

  static async applyForJob({
    first_name,
    last_name,
    email,
    phone_num,
    address,
    resume,
    job_id,
  }) {
    const result = await db.query(
      `INSERT INTO users (first_name,
                            last_name,
                            email,
                            phone_num,
                            address,
                            resume,
                            job_id
                            )
           VALUES ($1, $2, $3, $4, $5, $6, $7)
           RETURNING first_name,
                            last_name,
                            email,
                            phone_num,
                            address,
                            resume,
                            job_id`,
      [first_name, last_name, email, phone_num, address, resume, job_id]
    );
    let job = result.rows[0];

    return job;
  }
}

module.exports = Jobs;
