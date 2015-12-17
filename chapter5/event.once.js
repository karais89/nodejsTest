// process 객체에 uncaughtException 이벤트 연결.
var onUncaughtException = function(error) {
	console.log('예외가 발생했군. ^_^ 이번에만 봐주겠다 ^_^..!');
	
	// 이벤트 제거.
	process.removeListener('uncaughtException', onUncaughtException);
};

// 이벤트 연결.
process.on('uncaughtException', onUncaughtException);

setInterval(function() {
	error.error.error();	
}, 2000);

// 책 예제대로 정상작동 안함.