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
io.sockets.on('connection', function (socket) {
    // rint 이벤트.
    socket.on('rint', function (data) {
        // public 통신. - 현재 접속한 모든사용자에게 전달.
        io.sockets.emit('smart', data);        
    });
});