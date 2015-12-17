// 매개변수 추출.
// 모듈 추출.
var http = require('http');
var express = require('express');
var router = express.Router();

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(router);
app.use(express.static(__dirname + '/public'));

// 라우터 설정.
router.get('index', function(request, response) {
	response.send('<h1>Index Page</h1>');
});

// 전체 선택자.
router.get('*', function(request, response) {
	response.status(404).send('<h1>ERROR - PAGE Not Found</h1>');	
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

// app.router 없어짐.. express.Router() 변경.

// index 이외의 요청은 모두 에러를 출력.