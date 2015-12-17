// 웹 서버를 생성하고 실행합니다.
require('http').createServer(function (request, response) {
	// 응답합니다.
	response.writeHead(200, { 'Content-Type' : 'text/html'});	// 응답 헤더 작성.
	response.end('<h1>Hello Web Server With Node.js</h1>');		// 응답 본문 작성.
}).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});