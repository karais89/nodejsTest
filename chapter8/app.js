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
	// console.log(request.body);
	// console.log(request.files);
	// 
	// response.redirect('/');
	// 
	
	// 이미지 파일처리.
	// 변수 선언.
	// var comment = request.param('comment');
	var comment = request.body.comment;
	var imageFile = request.files.image;
	
	console.log("comment:", comment);
	console.log("imageFile:", imageFile);
	
	if(imageFile) {
		// 변수 선언.
		var name = imageFile.name;
		var path = imageFile.path;
		var type = imageFile.type;
		
		console.log("name:", name);
		console.log("path:", path);
		console.log("type:", type);
		
		// 이미지 파일 확인.
		if(type.indexOf('image') != -1) {
			// 이미지 파일의 경우. 파일이름 변경.
			var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
			
			fs.rename(path, outputPath, function(error) {
				response.redirect('/');
			});
		}else {
			console.log("image file not");
			// 이미지 파일이 아닌 경우 파일 이름 제거.
			fs.unlink(path, function(error) {
				response.sendStatus(400);
			});
		}	
	}else {
		// 파일이 없는 경우.
		console.log("file not");
		response.sendStatus(404);
	}
});

// 서버를 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

