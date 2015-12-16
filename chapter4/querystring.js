// 모듈 추출.
var url = require('url');
var querystring = require('querystring');

// url 문자열을 url 객체로 변환해 리턴.
var parsedObject = 
	url.parse('http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
// 쿼리 문자열을 쿼리 객체로 변환해 리턴.
console.log(querystring.parse( parsedObject.query ));
