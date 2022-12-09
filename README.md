1. 기본 express 프레임워크 웹서버 실습
express-app   	#git 저장소 생성
cd express-app
npm init
npm i express morgan
npm i -D nodemon

2. router를 사용한 라우팅 웹서버 실습과 에러처리
const express = require('express');
const router = express.Router( );
라우터 작성.
에러처리 미들웨어 작성.
