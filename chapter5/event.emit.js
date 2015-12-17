// exit 이벤트 연결.
process.on('exit', function() {
	console.log('안녕히 계세요..!');
});

// 이벤트 강제 실행.
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행중..
console.log('프로그램 실행중.');