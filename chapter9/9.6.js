// 데이터베이스 속성 지정 가능.
// 모듈 추출.
var mysql = require('mysql');

// 데이터베이스 연결.
var client = mysql.createConnection({
	user:'root',
	password:'비밀번호',
	database:'Company'
});
