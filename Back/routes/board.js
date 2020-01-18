import express from 'express';

import pool from '../db/dbPool';

const router = express.Router();



/* ---------------- 메소드 -------------------- */


/**
 * 게시판 리스트 불러오기
 * @returns Promise
 */
const getBoardList = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT user.name AS writer,
     board.title, board.tag, board.content, board.view_count,
     board.like_count, board.id FROM board INNER JOIN user ON board.writer_id = user.id`);
     return rows
  } catch (err) {
    return err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

/**
 * 게시판 디테일 불러오기
 * @param id
 * @returns Promise
 */
 const getBoardDetail = async (id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT * FROM board where id = ${id}`);
     return rows
  } catch (err) {
    return err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}

/**
 * 게시글 추가 하기
 * @param {title, category, content, writer_id} data 
 */
async function addBoard(data) {
  let conn;
  console.log('board : ', data);
  let title = data.title;
  let category = data.category;
  let content = data.content;
  let writerId = data.writer;
  try {
    conn = await pool.getConnection();
    const payload = await conn.query(`SELECT id FROM user WHERE id = ${writerId}`);
    console.log()
    const rows = await conn.query(`INSERT INTO board (title, category, content, writer)
                    VALUES ('${title}', '${category}', '${content}', '${writer}'); `) ;
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release(); //release to pool
  }
}


/* 게시판 가져오기 */
router.get('/', (req, res) => {
  const data = getBoardList();
  data.then((result) => {
    console.log('result : ' , result);
    res.status(201).json(result);
  }).catch((err) => {
    res.status(404).json({err: err});
  })
});
// 게시판 detail 요청
router.get('/:id', (req, res) => {
  let id = req.params.id;
  const data = getBoardDetail(id);
  data.then((result) => {
    console.log('result : ' , result);
    res.status(201).json(result);
  }).catch((err) => {
    res.status(404).json({err: err});
  })
});
/* 게시판 추가 */
router.post('/', (req, res) => {
  const data = req.body;
  const rs = addBoard(data);
  res.status(200).json({msg: '성공', resultSet: rs});
})
 
module.exports = router;
