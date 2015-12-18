// 모듈 추출.
var mysql = require('mysql');

// 데이터베이스 연결.
var client = mysql.createConnection({
	user:'root',
	password:'비밀번호'
});

// 데이터베이스 쿼리 사용.
client.query('USE Company');
client.query('SELECT * FROM products', function(error, result, fields) {
	if(error) {
		console.log('쿼리 문장에 오류가 있습니다.');
	}else {
		console.log(result);
	}
});