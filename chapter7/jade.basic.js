// 모듈 추출.
var http = require('http');
var fs = require('fs');
var jade = require('jade');

// 서버를 생성하고 실행.
http.createServer(function (request, response) {
	// jadePage.ejs 파일을 읽음.
	fs.readFile('jadePage.jade', 'utf8', function (error, data) {
		// complile -> jade 문자열을 HTML 문자열로 변경합니다.
		var fn = jade.compile(data);
		
		response.writeHead(200, { 'Content-Type' : 'text/html'});		
		response.end(fn({
			name: 'RintIanTta',
			description: 'Hello jade With Node.js..!'
		}));
	});
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});