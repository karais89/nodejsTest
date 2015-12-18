// rest 규정에 맞게 웹서비스 인터페이스 설정.
// GET /user - 사용자 전체를 조회.
// GET /user/273 - 273번 사용자 조회.
// POST /user - 사용자 추가.
// DELETE /user/273 - 273번 사용자 삭제.

// 모듈 추출.
var fs = require('fs');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// 더미 데이터베이스 구현.
// 즉시 실행함수.
var DummyDB = (function() {
	// 바깥 영역과 다른 새 영역을 생성하여 변수 충돌 방지
    // 이 영역의 내용은 즉시 실행합니다.
	// 자바스크립트의 융통성?
	// 변수 선언.
	var DummyDB = {};
	var storage = [];
	var count 	= 1;
	
	// 메서드 구현.
	// get
	DummyDB.get = function (id) {
		if(id) {
			// 변수 가공.
			id = (typeof id == 'string') ? Number(id) : id;
			
			// 데이터 선택.
			for(var i in storage) if (storage[i].id == id) {
				return storage[i];
			}				
		}else {
			return storage;
		}
	};		
	
	// insert
	DummyDB.insert = function(data) {
		data.id = count++;
		storage.push(data);
		return data;	
	};
	
	// remove 
	DummyDB.remove = function(id) {
		// 변수 가공.
		id = (typeof id == 'string') ? Number(id) : id;
		
		// 제거.
		for(var i in storage) if (storage[i].id == id) {
			// 데이터 제거. splice -> 배열에서 요소 제거.
			storage.splice(i, 1);
			
			// 리턴. 데이터 삭제 성공 
			return true;
		}
		
		// 리턴. 데이터 삭제 실패.
		return false;
	};
	
	// 리턴.
	return DummyDB;	
})();

// 서버 생성.
var app = express();

// 미들웨어 설정.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router);

// 라우터 설정.
router.get('/user', function(request, response) {
	response.send(DummyDB.get());
});

router.get('/user/:id', function(request, response) {
	// response.send(DummyDB.get(request.param('id')));
	response.send(DummyDB.get(request.params.id));	
});

router.post('/user', function(request, response) {
	// 변수 선언.
	// var name = request.param('name');
	// var region = request.param('region');
	
	// body, query, params 차이가??
	var name = request.body.name;
	var region = request.body.region;	
	
	// 유효성 검사.
	if(name && region) {
		response.send(DummyDB.insert({
			name: name,
			region: region
		}));
	}else {
		throw new Error('error');
	}
});

router.put('/user/:id', function(request, response) {});
router.delete('/user/:id', function(request, response) {});

// 서버 실행.
http.createServer(app).listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273');
});