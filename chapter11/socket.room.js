// 모듈 추출.
var fs = require('fs');

// 서버 생성.
var server = require('http').createServer();
var io = require('socket.io').listen(server);

// 서버 실행.
server.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273'); 
});

// 웹 서버 이벤트 연결.
server.on('request', function(request, response) {
   // HTMLPage3.html 파일을 읽습니다.
   fs.readFile('HTMLPage3.html', function(error, data) {
      response.writeHead(200, { 'Content-Type' : 'text/html'});
      response.end(data); 
   });    
});

// 소켓 서버 이벤트 연결.
io.sockets.on('connection', function(socket) {
    
});