var fs = require('fs');

// 파일을 읽습니다.
// 예외처리. 동기식
try {
	var data = fs.readFileSync('textfile.txt', 'utf8');
	console.log(data);
} catch(e) {
	console.log(e);
}

// 파일을 씁니다.
try {
	fs.writeFileSync('textfile.txt', 'Hello World..!', 'utf8');
	console.log('FILE WRITE COMPLETE');
} catch(e) {
	console.log(e);
}