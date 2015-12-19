// 모듈 추출.
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버를 만듬.
var server = http.createServer(function (request, response) {
    // HTMLPage4.html 파일을 읽습니다.
    fs.readFile('HTMLPage.html', function (error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

// 소켓 서버를 만듬.
var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    
});
