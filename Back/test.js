// require('dotenv').config()  // .env 파일 안에 있는 정보를 불러 온다.
import dotenv from 'dotenv'; 
dotenv.config(); // .env 파일에서 변수들을 로드한다.

const port = process.env.PORT
const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Hello World hh'))

app.listen(port, () => console.log(`Example app listening on port ${port}`)) 






// DB에서 특정 멘토 정보 불러오기
// async function getMentorDetailList(id) {
//   let conn;
//   try {
//     conn = await pool.getConnection();
//     const rows = await conn.query(`select * from user where role = 'mentor' and id = ${id}`);
//     return rows;
//   } catch (err) {
//     throw err;
//   } finally {
//     if (conn) conn.release();
//   }
// }


// app.get('/mentors/:id', (req, res) => {
//   const id = req.params.id;
//   const rs = getMentorDetailList(id);
//   rs.then((result) => {
//     console.log('result : ', result);
//     res.header("이건 정확히 뭐지?", "*");
//     res.send(200, result);
//   })
// });
