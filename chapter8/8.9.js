// 모듈 추출.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(function (request, response, next) {
	// 데이터 추가.
	request.number = 52;
	response.number = 273;
	next();
});

app.use(function (request, response, next) {
	// 응답.
	response.send('<h1>' + request.number + ' : ' + response.number + '</h1>');
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});