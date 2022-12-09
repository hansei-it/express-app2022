const express = require('express');

const app = express();

app.get('/', (req, res, next)=>{
  res.send('/ 접속 완료되었습니다! 축하해요~');
});
app.get('/data' , (req, res, next)=>{ 
  res.send('/data 접속 완료되었습니다!');
});
app.get('/data/a' , (req, res, next)=>{ 
  res.send('/data/a 접속 완료되었습니다!');
});
app.get('/data/b' , (req, res, next)=>{ 
  res.send('/data/b  접속 완료되었습니다!');
});
app.get('/test/a' , (req, res, next)=>{ 
  res.send('/test/a 접속 완료되었습니다!');
});
app.get('/test/b' , (req, res, next)=>{ 
  res.send('/test/b  접속 완료되었습니다!');
});

app.listen(3000, ()=>{
  console.log("포트 3000  서버가 대기 중~");
});