const express = require('express');
const morgan = require('morgan');

const indexRouter = require('./routes');
const dataRouter = require('./routes/data');
const testRouter = require('./routes/test');

const app = express();

app.use(morgan('dev'));
app.use('/', indexRouter);
app.use('/data', dataRouter);
app.use('/test', testRouter);
app.use('/t', (req, res, next)=>{
  //throw Error('임의로 발생 시킨 서버 오류!');
  req.body.data.params = '에러 발생 시키기';
});

app.use((req,res,next)=>{
  res.send("404 요청한 페이지가 없습니다.");
})

app.use((err,req,res,next)=>{
  console.log('500 서버에서 에러 발생!');
  res.send("서버 오류입니다. : "+ err.message);
})

app.listen(3000, ()=>{
  console.log("포트 3000  서버가 대기 중~");
});