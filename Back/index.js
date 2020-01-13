import dotenv from 'dotenv';
import mariadb from 'mariadb';
import cors from 'cors';
import { response } from 'express';

dotenv.config();

const port = process.env.PORT;
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.use(cors());

const pool = mariadb.createPool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  connectionLimit: 5
});



async function getUserList(id) {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`select * from board where id = ${id}`);
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

async function getBoardList() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`select * from board `);
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


app.get('/', (req, res) => res.send("hello world"));
app.get('/board/:id', (req, res) => {
  const id = req.params.id;
  const rs = getUserList(id);
  rs.then((result) => {
    console.log('result : ', result);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(200, result);
  })
});
app.get('/board', (req, res) => {
  const rs = getBoardList();
  rs.then((result) => {
    console.log('result : ', result);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(200, result);
  })
});
app.listen(port, () => console.log(`Example app listening on port ${port}`))