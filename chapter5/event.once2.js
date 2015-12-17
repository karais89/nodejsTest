// 이벤트 연결.
process.once('uncaughtException', function(error) {
	console.log('예외가 발생했군. ^_^ 이번에만 봐주겠다 ^_^..!');	
});

setInterval(function() {
	error.error.error();	
}, 2000);

// 책 예제대로 정상작동 안함.