// express 기본 서버.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// 미들웨어를 설정.
app.use(function (request, response) {
	// User-Agent 속성을 추출.
	var agent = request.header('User-Agent');
	
	console.log(request.headers);
	console.log(agent);
	
	// 응답.
	// response.send(200);
	response.sendStatus(200);
});

// 서버 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});

// express deprecated res.send(status): Use res.sendStatus(status) instead 8.5.js:17:11
