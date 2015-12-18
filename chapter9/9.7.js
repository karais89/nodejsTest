// 모듈 추출.
// ? 토큰을 사용할수 있음.
var mysql = require('mysql');

// 데이터베이스 연결.
var client = mysql.createConnection({
	user:'root',
	password:'비밀번호',
	database:'Company'
});

client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', 
['Name Value', 'Model Number Value', 'Series Value'
], function(error, result, fields) {
	
});