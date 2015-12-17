// 서버 생성.
var server = require('http').createServer();

// 서버 실행.
server.listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

// 10초후 함수 실행.
setInterval(function () {
	server.close();
}, 10000);