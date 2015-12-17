// 모듈 추출.
var fs = require('fs');

// 모듈 사용.
// 파일을 비동기적으로 읽음.
fs.readFile('textfile.txt', 'utf8', function (error, data) {
	console.log(data);
});