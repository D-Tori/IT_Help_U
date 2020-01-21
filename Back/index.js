// config
import dotenv from 'dotenv';
import cors from 'cors';

import boardRouter from './routes/board';
import userRouter from './routes/user'

dotenv.config();

/* express 미들웨어 설정 */
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true, 
};
app.use(cors(corsOptions));



/* 라우팅 */
app.use('/board', boardRouter);
// app.use('/mentor', indexRouter);
app.use('/user', userRouter);



// DB에서 멘토 정보 불러오기
async function getMentorList() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`select * from Users where role = 'Mentor';`)
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); // release to pool
  }
}





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


app.listen(port, () => console.log(`Example app listening on port ${port}`));