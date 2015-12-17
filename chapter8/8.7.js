// express 기본 서버.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// 미들웨어를 설정.
app.use(function (request, response) {
	// 요청 매개변수 추출.
	// var name = request.param('name');
	// var region = request.param('region');
	
	var name = request.query.name;
	var region = request.query.region;
	
	// 응답.
	response.send('<h1>' + name + '-' + region + '</h1>');
});

// 서버 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});

//Use req.params, req.body, or req.query instead 8.7.js:11:21
