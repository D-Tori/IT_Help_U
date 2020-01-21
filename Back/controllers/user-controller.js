import pool from "../db/dbPool";

exports.registerUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;

  if (!email || !password || !name) {
    return res.status(400).json({
      msg: "You need to send email and password"
    });
  }

  const findUser = async email => {
    let conn;
    try {
      conn = await pool.getConnection();
      let rows = await conn.query(`SELECT * from user where email = ${email}`);
      return rows;
    } catch (err) {
      return err;
    } finally {
      // if (conn) conn.release();
    }
  };

  const registerUser = async (name, email, password) => {
    let conn;
    try {
      conn = await pool.getConnection();
      let rows = await conn.query(`INSERT INTO user(email, name, password) VALUES('${email}', '${name}', '${password}')`);
      return rows;
    } catch (err) {
      return err;
    } finally {
      // if (conn) conn.release();
    }
  };

  let findUserdata = findUser(email);

  findUserdata
    .then(result => {
      if (result.length > 0) {
        console.log(result);
        return res.status(500).json({ msg: "이미 존재하는 회원입니다." });
      } else {
        console.log('일단 ')
        let data = registerUser(name, email, password);
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
