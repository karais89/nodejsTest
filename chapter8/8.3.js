// express 기본 서버.
var http = require('http');
var express = require('express');

// 서버 생성.
var app = express();

// request 이벤트 리스너를 설정.
app.use(function (request, response) {
	// 데이터를 생성.
	var output = [];
	for(var i = 0; i < 3; i++) {
		output.push({
			count:i,
			name: 'name - ' + i
		});
	}
	
	// 응답.
	response.send(output);
});

// 서버 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});