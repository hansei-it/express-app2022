const express = require('express');

const router = express.Router();

router.get('/' , (req, res, next)=>{ 
  res.send('/test/b  접속 완료되었습니다!');
});
router.get('/1' , (req, res, next)=>{ // /test/b/1
  res.send('/test/b/1  접속 완료되었습니다!');
});
router.get('/2' , (req, res, next)=>{ // /test/b/2
  res.send('/test/b/2  접속 완료되었습니다!');
});
router.get('/3' , (req, res, next)=>{ // /test/b/3
  res.send('/test/b/3  접속 완료되었습니다!');
}); 

module.exports = router;
