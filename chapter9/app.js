// 모듈 추출.
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();

// 데이터베이스와 연결.
var client = mysql.createConnection({
	user: 'root',
	password: '비밀번호',
	database: 'Company'
});

// 서버 생성.
var app = express();
app.use(router);

// 서버를 실행합니다.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});

// 라우트 실행.
router.get('/', function(request, response) {});
router.get('/delete/:id', function(request, response) {});
router.get('/insert', function(request, response) {});
router.post('insert', function(request, response) {});
router.get('/edit/:id', function(request, response) {});
router.post('/edit/:id', function(request, response) {});

