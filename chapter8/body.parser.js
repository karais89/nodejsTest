// 모듈 추출.
var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

// 서버 생성.
var app = express();

// 미들웨어를 설정합니다.
app.use(cookieParser());
app.use(bodyParser());
app.use(router);

// 라우터 설정.
router.get('/', function(request, response) {});
router.get('/login', function(request, response) {});
router.post('/login', function(request, response) {});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});