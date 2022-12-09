const express = require('express');

const bRounter = require('./b');

const router = express.Router();

router.get('/' , (req, res, next)=>{ 
  res.send('/test 접속 완료되었습니다!');
});
router.get('/a' , (req, res, next)=>{ 
  res.send('/test/a 접속 완료되었습니다!');
});
router.use('/b', bRounter); // /test/b
//...

module.exports = router;