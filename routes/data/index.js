const express = require('express');

const router = express.Router();

router.get('/' , (req, res, next)=>{ 
  res.send('/data 접속 완료되었습니다!');
});
router.get('/a' , (req, res, next)=>{  //'/data/a'
  res.send('/data/a 접속 완료되었습니다!');
});
router.get('/b' , (req, res, next)=>{  //'/data/b'
  res.send('/data/b  접속 완료되었습니다!');
});

module.exports = router;