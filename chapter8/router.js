// 모듈 추출.
var http = require('http');
var express = require('express');
var router = express.Router();

// 서버 생성.
var app = express();

// 미들웨어 설정.
//app.use(app.router);
app.use(router);

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

// app.router 없어짐.. express.Router() 변경.