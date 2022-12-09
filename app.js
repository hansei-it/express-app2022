const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');

const { sequelize } = require('./models');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');

const app = express();
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);
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