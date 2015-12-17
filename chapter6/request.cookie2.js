// 모듈 추출.
var http = require('http');

// 서버를 생성하고 실행.
http.createServer(function (request, response) {
	// 쿠키를 추출하고 분해합니다.
	var cookie = request.headers.cookie;
	cookie = cookie.split(';').map(function (element) {
		var element = element.split('=');
		return {
			key: element[0],
			value: element[1]
		};
	});
	
	// SET COOKIE
	response.writeHead(200, {
		'Content-Type' : 'text/html',
		'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
	});
	// 응답.
	response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});