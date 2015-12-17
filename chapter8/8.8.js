// next는 다음에 위치하는 함수를 의미.
// 모듈 추출.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// 미들웨어 설정 (1)
app.use(function (request, response, next) {
	console.log('첫 번째 미들웨어.');
	next();
});

// 미들웨어 설정 (2)
app.use(function (request, response, next) {
	console.log('두 번째 미들웨어.');
	next();
});

// 미들웨어 설정 (3)
app.use(function (request, response, next) {
	console.log('세 번째 미들웨어.');
	
	// 응답합니다.
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end('<h1>express Basic</h1>');
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

// 요청 중간 중간에 여러가지 일을 할 수 있음.
// use 메서드 매개변수에 입력하는 함수를 미들웨어라고 부릅니다.
