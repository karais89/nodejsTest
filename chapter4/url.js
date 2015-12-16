// 모듈 추출.
var url = require('url');

// url 문자열을 url 객체로 변환해 리턴.
var parsedObject = url.parse('http://www.hanb.co.kr/trackback/978-89-7914-874-9');
console.log(parsedObject);