var http = require('http');

// server 객체 생성.
var server = http.createServer();

// server 객체 이벤트 연결.
// 클라이언트가 요청할 때 발생하는 이벤트.
server.on('request', function() {
	console.log('Request on');
});

// 클라이언트가 접속할때 발생하는 이벤트.
server.on('connection', function() {
	console.log('Connection on');
});

// 서버가 종료될 때 발생하는 이벤트.
server.on('close', function() {
	console.log('Close on');
});

server.listen(52273);
