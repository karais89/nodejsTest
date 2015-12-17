// 모듈 추출.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(express.static(__dirname + '/public'));
app.use(function (request, response) {
	// 응답.
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<img src="/Penguins.jpg" width="100%" />');
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});