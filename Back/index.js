// require('dotenv').config()  // .env 파일 안에 있는 정보를 불러 온다.
import dotenv from 'dotenv'; 
dotenv.config(); // .env 파일에서 변수들을 로드한다.

const port = process.env.PORT
const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Hello World hh'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))