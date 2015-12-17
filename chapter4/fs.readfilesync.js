// 모듈 추출.
var fs = require('fs');

// 모듈 사용.
// 파일을 동기적으로 읽음.
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);
