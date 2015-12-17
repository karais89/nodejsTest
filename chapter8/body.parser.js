// 모듈 추출.
var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

// 서버 생성.
var app = express();

// 미들웨어를 설정합니다.
app.use(cookieParser());
// app.use(bodyParser());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

// 라우터 설정.
router.get('/', function(request, response) {
	if(request.cookies.auth) {
		response.send('<h1>Login Success</h1>');
	}else {
		response.redirect('/login');
	}
});

router.get('/login', function(request, response) {
	fs.readFile('login.html', function(error, data) {
		response.send(data.toString());
	});
});

router.post('/login', function(request, response) {
	// 쿠키를 생성.
	// var login = request.param('login');
	// var password = request.param('password');	
	
	var login = request.body.login;
	var password = request.body.password;		
		
	// 출력.
	console.log(login, password);
	console.log(request.body);
	
	// 로그인 확인.
	if(login == 'rint' && password == '1234') {
		// 성공.
		response.cookie('auth', true);
		response.redirect('/');
	}else {
		// 실패.
		response.redirect('/login');
	}
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

// body-parser deprecated bodyParser: use individual json/urlencoded middlewares body.parser.js:14:9
// body-parser deprecated undefined extended: provide extended option node_modules/body-parser/index.js:105:29
