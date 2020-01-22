import pool from "../db/dbPool";
import jwt from 'jsonwebtoken';
import fs from 'fs';

const findUser = async (email, password) => {
  let conn;
  try {
    conn = await pool.getConnection();
    let rows = await conn.query(`SELECT * from user where email = '${email}' and password = '${password}'`);
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
    let rows = await conn.query(`INSERT INTO user(email, name, password) VALUES('${email}', '${name}', '${password}')`);
    return rows;
  } catch (err) {
    return err;
  } finally {
    if (conn) conn.release();
  }
};


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
        console.log('일단 ')
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

  let user = await findUser(email, password);

  let privateKey = fs.readFileSync('./private.pem', 'utf8');

  if (user.length > 0) {
    const token = jwt.sign({
      email: user.email,
      userId: user.id
    }, privateKey, { algorithm: 'HS256', expiresIn: '1m'});
    return res.status(200).json({
      result: 'ok',
      token
    });
  } else {
    res.status(400).json({ error: 'invalid user'});
  }
  
}
