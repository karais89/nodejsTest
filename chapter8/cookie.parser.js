// cookie parser 미들웨어는 요청 쿠키를 추출하는 미들웨어.
// 모듈 추출.
// https://github.com/expressjs/cookie-parser?_ga=1.34349409.1183649174.1450166755
// npm install cookie-parser
var http = require('http');
var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(cookieParser());
app.use(router);

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});