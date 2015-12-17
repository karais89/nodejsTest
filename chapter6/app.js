// 모듈 추출합니다.
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버 생성 및 실행.
http.createServer(function (request, response) {
	// 변수 선언.
	var pathname = url.parse(request.url).pathname;
	
	// 페이지 구분.
	if(pathname == '/') {
		// Index.html 파일을 읽습니다.
		fs.readFile('Index.html', function (error, data) {
			response.writeHead(200, { 'Content-Type' : 'text/html'});
			response.end(data);
		});
	}else if(pathname == '/OtherPage') {
		// OtherPage.html 파일을 읽습니다.
		fs.readFile('OtherPage.html', function (error, data) {
			response.writeHead(200, { 'Content-Type' : 'text/html'});
			response.end(data);
		});
	}	
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});