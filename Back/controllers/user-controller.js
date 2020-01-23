import pool from "../db/dbPool";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const findUser = async (email, password) => {
  let conn;
  try {
    conn = await pool.getConnection();
    let rows = await conn.query(
      `SELECT * from user where email = '${email}' and password = '${password}'`
    );
    return rows;
  } catch (err) {
    return err;
  } finally {
    if (conn) conn.release();
  }
};

const addUser = async (name, email, password) => {
  let conn;
  try {
    conn = await pool.getConnection();
    let rows = await conn.query(
      `INSERT INTO user(email, name, password) VALUES('${email}', '${name}', '${password}')`
    );
    return rows;
  } catch (err) {
    return err;
  } finally {
    if (conn) conn.release();
  }
};

exports.isAuthorized = (req, res, next) => {
  
  if(typeof req.headers.authorization !== "undefined"){
    let token = req.headers.authorization.split(" ")[1];
    let scretKey = process.env.SECRETKEY;

    jwt.verify(token, scretKey, { algorithms: 'HS256'}, (err, decoded) => {
      if (err) {
        res.status(500).json({ error: "Not Authorized"});
      }

      console.log(decoded);
      return next();
    })
  } else {
    res.status(500).json({ error: "Not Authorized "});
  }
}

exports.registerUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;

  if (!email || !password || !name) {
    return res.status(400).json({
      msg: "You need to send email and password"
    });
  }
  let findUserdata = findUser(email);

  findUserdata
    .then(result => {
      if (result.length > 0) {
        console.log(result);
        return res.status(500).json({ msg: "이미 존재하는 회원입니다." });
      } else {
        console.log("일단 ");
        let data = addUser(name, email, password);
        data
          .then(result => {
            console.log("DB에 추가된 것", result);
            return res.status(201).json(result);
          })
          .catch(err => {
            console.log(err);
            return res.status(400).json({ msg: err });
          });
      }
    })
    .catch(err => {
      return res.status(400).json(err);
    });
};

exports.login = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({ msg: "req.body에 정보가 없습니다." });
  }

  try {
    let user = await findUser(email, password);
    if (user.length > 0) {
      let scretKey = process.env.SECRETKEY;

      const token = jwt.sign({email: user[0].email, name: user[0].name}, scretKey, {
        algorithm: "HS256",
        expiresIn: "1m"
      });
      return res.status(200).json({
        result: "ok",
        token
      });
    } else {
      return res.status(406).json({ msg: "no find user" });
    }
  } catch (err) {
    return res.status(404).json({ msg: err });
  }
};

// DB에서 멘토 정보 불러오기
const getMentorList = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(`select * from user where role = 'mentor';`);
    return rows;
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.release();
  }
};

// mentors 로 오면 아래 코드가 실행된다.
exports.mentors = (req, res) => {
  console.log(req);
  const rs = getMentorList();
  rs.then(result => {
    console.log("result : ", result);
    res.status(200).json(result);
  });
};
