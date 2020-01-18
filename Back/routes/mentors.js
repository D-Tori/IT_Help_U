import dotenv from 'dotenv';
import mariadb from 'mariadb';

dotenv.config();

const pool = mariadb.createPool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  connectionLimit: 5
});


async function loadDB(req, res) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM mentors;");
    console.log('결과 : ',rows);
  } catch (err) {
      throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

console.log(loadDB());