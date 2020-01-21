// config
import dotenv from 'dotenv';
import cors from 'cors';

import boardRouter from './routes/board';
<<<<<<< HEAD
import userRouter from './routes/user'
=======
import mentorRouter from './routes/mentor';
>>>>>>> f483ac7dc43e25d80587dc8ed0ea5df3063c85a1

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
// app.use('/mentors', mentorRouter);
app.use('/user', userRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}`));