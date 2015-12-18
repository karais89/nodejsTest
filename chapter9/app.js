// 모듈 추출.
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// 데이터베이스와 연결.
var client = mysql.createConnection({
	user: 'root',
	password: '비밀번호',
	database: 'Company'
});

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

// 서버를 실행합니다.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});

// 라우트 실행.
router.get('/', function(request, response) {
	// 파일을 읽습니다.
	fs.readFile('list.html', 'utf8', function(error, data) {
		// 데이터베이스 쿼리를 실행.
		client.query('SELECT * FROM products', function(error, results) {
			// 응답.
			response.send(ejs.render(data, {
				data: results
			}));
		});
	});
});
router.get('/delete/:id', function(request, response) {
	// // 데이터 베이스 쿼리 실행.
	// client.query('DELETE FROM products WHERE id=?', [request.param('id')], function() {
	// 	// 응답합니다.
	// 	response.redirect('/');
	// })
	
	// 데이터 베이스 쿼리 실행.
	client.query('DELETE FROM products WHERE id=?', [request.params.id], function() {
		// 응답합니다.
		response.redirect('/');
	})
});
router.get('/insert', function(request, response) {
	// 파일을 읽습니다.
	fs.readFile('insert.html', 'utf8', function(error, data) {
		// 응답합니다.
		response.send(data);
	});
});

router.post('/insert', function(request, response) {
	// body-parser 선언을 해야 정상 작동 함.
	// 변수 선언.
	var body = request.body;	
	// 데이터베이스 쿼리 실행.
	client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', 
	[body.name, body.modelnumber, body.series], function() {
		// 응답.
		response.redirect('/');
	});	
});
router.get('/edit/:id', function(request, response) {});
router.post('/edit/:id', function(request, response) {});

