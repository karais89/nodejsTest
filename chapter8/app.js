// 모듈 추출.
var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var multiparty = require('connect-multiparty'); // express 4.x 부터 express 모듈의 multipart 미들웨어가 제거되었다.
												// 따라서 body Parser 미들웨어에서 multipart 기능이 블가능해져 이 미들웨어를 설치하여 사용한다.

// 서버 생성.
var app = express();

// 미들웨어를 설정합니다.
app.use(cookieParser());
// app.use(express.limit('10mb')); // express 4.x 부터 사용되지 않는다.
app.use(bodyParser.json({limit:'10mb'}));
// app.use(bodyParser.urlencoded({ extended: false, uploadDir: __dirname + '/multipart', limit : '10mb' }));
app.use(multiparty({uploadDir: __dirname + '/multipart'}));
app.use(router);

// 라우터 설정.
router.get('/', function(request, response) {
	fs.readFile('HTMLPage.html', function(error, data) {
		response.send(data.toString());
	});
});

router.post('/', function(request, response) {
	console.log(request.body);
	console.log(request.files);
	
	response.redirect('/');
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

