// 모듈 추출.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버 생성.
var server = http.createServer(function (request, response) {
    // HTMLPage.html 파일을 읽습니다.
    fs.readFile('HTMLPage.html', function(error, data) {
       response.writeHead(200, {'Content-Type' : 'text/html'});
       response.end(data); 
    });
}).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});

// 소켓 서버를 생성 및 실행합니다.
var io = socketio.listen(server);
// Option log level is not valid. Please refer to the Readme.
// $ npm install debug --save 디버그 모듈을 따로 설치해서 디버그?
// DEBUG=* node yourfile.js ??
io.set('log level', 2);
// io.sockets 객체에 connection 이벤트를 연결.
io.sockets.on('connection', function (socket) {
    // rint 이벤트 - 사용자 정의 이벤트.
    socket.on('rint', function (data) {
        // 클라이언트가 전송한 데이터 출력.
        console.log('Client Send Data:', data);
        
        // 클라이언트에 smart 이벤트 발생 - 사용자정의 이벤트.
        socket.emit('smart', data);
    });
});