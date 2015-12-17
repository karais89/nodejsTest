// 모듈 추출.
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

// 서버를 생성하고 실행.
http.createServer(function (request, response) {
	// ejsPage.ejs 파일을 읽음.
	fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
		response.writeHead(200, { 'Content-Type' : 'text/html'});
		// render -> ejs 문자열을 HTML 문자열로 변경합니다.
		response.end(ejs.render(data, {
			name : 'RintIanTta',
			description: 'Hello ejs With Node.js .. !'
		}));
	});
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});