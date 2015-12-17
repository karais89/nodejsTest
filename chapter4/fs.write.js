// 모듈 추출.
var fs = require('fs');

// 변수 선언.
var data = 'Hello World..!';

// 모듈 사용. 비동기
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(error){
	console.log('WRITE FILE ASYNC COMPLETE');
});

// 동기
fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');