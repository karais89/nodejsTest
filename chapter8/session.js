// https://github.com/expressjs/session
// npm install express-session
// 모듈 추출.
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var session = require('express-session');

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(cookieParser());
// app.use(express.session({secret:'secret key'})); // 사용안함.
app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (reqeust, response) {});

// 서버 실행.
http.createServer(app).listen(5227, function() {
	console.log('Server running at http://127.0.0.1:52273');
});

