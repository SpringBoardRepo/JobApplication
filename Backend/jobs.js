const db = require("./db");

class Jobs {
  static async findAll() {
    const result = await db.query(`SELECT * FROM clients`);
    console.log(result);
    return result.rows;
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
    console.log("Name", first_name);
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
