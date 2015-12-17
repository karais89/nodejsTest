// 모듈 추출.
var rint = require('./rint.js');

// 이벤트 연결.
rint.timer.on('tick', function() {
	console.log('이벤트를 실행.');
});