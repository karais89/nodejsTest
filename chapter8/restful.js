// rest 규정에 맞게 웹서비스 인터페이스 설정.
// GET /user - 사용자 전체를 조회.
// GET /user/273 - 273번 사용자 조회.
// POST /user - 사용자 추가.
// DELETE /user/273 - 273번 사용자 삭제.

// 모듈 추출.
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// 더미 데이터베이스 구현.
var DummyDB = (function() {
	
})();

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

// 라우터 설정.
router.get('/user', function(request, response) {});
router.get('/user/:id', function(request, response) {});
router.post('/user', function(request, response) {});
router.put('/user/:id', function(request, response) {});
router.delete('/user/:id', function(request, response) {});

// 서버 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});