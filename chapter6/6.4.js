// 길이가 짧은 웹 서버를 생성하고 실행.
require('http').createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end('<h1>Hello World..!</h1>');
}).listen(52273);