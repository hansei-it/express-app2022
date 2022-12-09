const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
  res.send("/index 라우터야!");
});

module.exports = router;