// express 기본 서버.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// 미들웨어를 설정.
app.use(function (request, response) {
	// User-Agent 속성을 추출.
	var agent = request.header('User-Agent');
	
	// 브라우저를 구분.
	if (agent.toLowerCase().match(/chrome/)) {
		// 페이지를 출력.
		response.send('<h1>Hello Chrome ..! </h1>');
	}else {
		// 페이지를 출력.
		response.send('<h1>Hello express ..! </h1>');	
	}
	
});

// 서버 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});