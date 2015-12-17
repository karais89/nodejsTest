// 요청 방식과 시간을 출력하고 싶을때..
// 모듈 추출.
var http = require('http');
var express = require('express');
var logger = require('morgan');

// 서버 생성.
var app = express();

// 미들웨어 설정.
// 로그 정보를 출력합니다.
// app.use(express.logger());
app.use(logger('short'));
app.use(function (request, response) {
	response.send('<h1>express Basic</h1>');
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

// logger 없어짐. morgan 변경됨.
// npm install morgan