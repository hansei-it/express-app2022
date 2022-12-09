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

3. 제너레이터 이용한 기본 코드 생성 및 템플릿 엔진 사용
mkdir gen-app
cd gen-app
npm install -g express-generator
express -v ejs

4. mysql DB 설치와 sequelize 를 이용한 ORM 실습
npm i sequelize sequelize-cli mysql2
npx sequelize init
config 설정
npx sequelize db:create 	 # db 생성
npm i nunjucks path