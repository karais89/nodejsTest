// forever start app.js -> 죽어도 다시 실행됨.
// forever list -> forever 로 실행되는 node.js 파일들.
// forever stop 0(프로세스 번호) -> node.js 종료
// 서버 생성 및 실행. 
require('http').createServer(function (request, response) {
	// 기본 경로로 들어오면 정상적으로 응답하지만 다른 경로로 들어오면 에러
	if(request.url == '/') {
		response.write('<!DOCTYPE html>');
		response.write('<html>');
		response.write('<head>');
		response.write('	<title>Forever</title>');
		response.write('</head>');
		response.write('<body>');
		response.write('	<h1>Forever</h1>');
		response.write('</body>');
		response.write('</html>');
		response.end();
	}else {
		// 오류 발생.
		console.log('error');
		error.error.error();
	}
	
}).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});