// 터미널 supervisor 명령 입력.
// 파일이 변경되면 자동으로 재시작 시켜줌.
// http 통신일때만 사용 해야됨.
// supervisor 파일이름.js로 실행.
var http = require('http');

// 서버 생성 및 실행.
http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end('<h1>Test - File - 2</h1>');
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});