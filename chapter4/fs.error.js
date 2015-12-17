var fs = require('fs');

// 파일을 읽습니다. 비동기적.
fs.readFile('textfile.txt', 'utf8', function(error, data) {
	if(error) {
		console.log(error);
	}else {
		console.log(data);
	}
});

// 파일을 씁니다. 비동기.
fs.writeFile('textfile.txt', 'Hello World...!', 'utf8', function (error) {
	if(error) {
		console.log(error);
	}else {
		console.log('FILE WRITE COMPLETE');
	}
});

// 조건문안에 underfined 자료형의 변수를 넣을 경우 자동으로 false.
// 만약 예외가 발생하지 않았다면 매개변수 error에 어떠한 값도 들어가지 않으므로.
// else 구문 실행. 만약 예외가 발생했다면 조건문 안 표현식이 true가 되어 예외 객체를 출력.

