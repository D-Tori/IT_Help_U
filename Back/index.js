import dotenv from 'dotenv';
import mariadb from 'mariadb';
import cors from 'cors';

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

async function addBoard(data) {
  let conn;
  console.log('board : ', data);
  let title = data.title;
  let category = data.category;
  let content = data.content;
  let user = data.buser;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`INSERT INTO board (title, category, content, buser)
                    VALUES ('${title}', '${category}', '${content}', '${buser}'); `) ;
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}



// DB에서 멘토 정보 불러오기
async function getMentorList() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`select * from user where role = 'Mentor';`)
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); // release to pool
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
app.post('/board', (req, res) => {
  const data = req.body;
  const rs = addBoard(data);
  res.status(200).json({msg: '성공', resultSet: rs});
})



// 
app.get('/mentors', (req, res) => {
  console.log(req);
  const rs = getMentorList();
  rs.then((result) => {
    console.log('result : ', result);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(200, result);
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}`))