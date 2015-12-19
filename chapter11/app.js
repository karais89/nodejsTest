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
    fs.readFile('HTMLPage2.html', 'utf8', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
});

// 소켓 서버 이벤트 연결.
io.sockets.on('connection', function(socket) {
    // setname 이벤트 발생.
    socket.on('setname', function(data) {
       // 클라이언트 데이터 저장.
       // socket.set is not a function
    //    socket.set('name', data); 
        socket.name = data;
    });
    
    // getname 이벤트 발생.
    socket.on('getname', function(data) {
       // socket.get is not a function
    //    // 데이터 추출.
    //    socket.get('name', function(error, data) {
    //      // 데이터 전송.
    //      socket.emit('responsename', name);  
    //    });
    
        socket.emit('responsename', socket.name);  
    });
});