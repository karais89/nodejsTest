// process 객체에  exit 이벤트 연결.
process.on('exit', function() {
	console.log('안녕히 가거라 ^_^ .. !');
});

// process 객체에 uncaughtException 이벤트 연결.
process.on('uncaughtException', function(error) {
	console.log('예외가 발생했군. ^_^ 봐주겠다. ^_^..!');
});

// 2초 간격으로 3번 예외를 발생.
var count = 0;
var id = setInterval(function() {
	count++;
	// 3번 실행 후 타이머 중지.
	if(count == 3) { clearInterval(id);}
	
	// 예외 강제 발생.
	error.error.error();	
}, 2000);

// 실제 정상 작동 안함.
