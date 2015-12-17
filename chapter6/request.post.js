// 모듈 추출.
var http = require('http');
var fs = require('fs');

// 서버를 생성하고 실행.
http.createServer(function (request, response) {
	if(request.method == 'GET') {
		// GET 요청.
		fs.readFile('HTMLPage2.html', function(error, data) {
			response.writeHead(200, { 'Content-Type' : 'text/html'});
			response.end(data);
		});
	}else if(request.method == 'POST') {
		// POST 요청.
		request.on('data', function(data) {
			response.writeHead(200, { 'Content-Type' : 'text/html'});
			response.end('<h1>' + data + '</h1>');
		});
	}
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});