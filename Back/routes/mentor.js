import express from 'express';
import pool from '../db/dbPool';

const router = express.Router();


// DB에서 멘토 정보 불러오기
const getMentorList = async () =>  {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`select * from user where role = 'mentor';`)
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); // release to pool
  }
}

// mentors 로 오면 아래 코드가 실행된다.
router.get('/', (req, res) => {
  console.log(req);
  const rs = getMentorList();
  rs.then((result) => {
    console.log('result : ', result);
    res.status(200).json(result);
  })
})

module.exports = router;