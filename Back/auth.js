import pool from "./db/dbPool";

const isAutorized = (req, res, next) => {
  
  if(typeof req.headers.authorization !== "undefined"){
    let token = req.headers.authorization.split(" ")[1];
    let privateKey = fs.readFileSync('../private.pem', 'utf8');

    jwt.verify(token, privateKey, { algorithms: 'HS256'}, (err, decoded) => {
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

const findUser = async (email) => {
  let conn;
  try{
    conn = pool.getConnection();
    let rows = await conn.query(`SELECT * from user where email = ${email}`);
    return rows;
  }catch(err) {
    return err;
  }finally {
    if(conn) conn.release();
  }

}



app.get('/login', (req, res) => {
  let email = req.body.email;
  let privateKey = fs.readFileSync('./private.pem', 'utf8');
  let token = jwt.sign({ "email": `${email}` }, privateKey, { algorithm: 'HS256', expiresIn: '5m'});
  
})

app.post('/signup', (req, res) => {
  let email = req.body.email;

  let findUserdata = findUser(email);
  findUserdata.then((result) => {
    if(result.length > 0) {
      res.status(500).json({ msg: '이미 존재하는 회원입니다.'});
    } else {
      res.status(201).json(result);
    }  
  });

  let data = registerUser();
  data.then((result) => {
    res.status(201).json()
  })
  
  
})