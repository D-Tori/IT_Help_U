import dotenv from 'dotenv';
import mariadb from 'mariadb';

dotenv.config();

const port = process.env.PORT;
const express = require('express');
const app = express();

const pool = mariadb.createPool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  connectionLimit: 5
});



async function getUserList(req, res) {
  let conn;
  try {
 
    conn = await pool.getConnection();
    const rows = await conn.query("select * from user");
    console.log(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


app.get('/', (req, res) => getUserList());
app.listen(port, () => console.log(`Example app listening on port ${port}`))