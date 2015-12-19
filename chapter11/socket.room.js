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
    // join 이벤트. - 클라이언트가 특정한 방에 접속하게 만드는 이벤트.
    socket.on('join', function(data) {
        socket.join(data);         // 클라이언트를 방에 접속하게 만듬.
        // socket.set('room', data); // 클라이언트에게 자신의 방 번호부여. 
        socket.room = data;
    });
    
    // message 이벤트 - 같은 방에 속한 클라이언트에 메시지를 전달하는 이벤트.
    socket.on('message', function(data) {
        // get 메서드를 사용해서 클라이언트 방 번호를 추출.
        // in 메서드로 현재 접속한 클라이언트 중 같은 방을 공유하는 클라이언트 추출.
        // 추출한 클라이언트에 emit() 메서드를 사용하여 이벤트를 발생시키면 같은 방에 속하는
        // 클라이언트에 데이터를 전달 할 수 있습니다.
        // socket.get('room', function(error, room) {
        //    io.sockets.in(room).emit('message', data); 
        // });
        console.log('message', data);
         io.sockets.in(socket.room).emit('message', data); 
    });
});