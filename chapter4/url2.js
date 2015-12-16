// 모듈 추출.
var url = require('url');

// url 문자열을 url 객체로 변환해 리턴.
// 두번째 매개변수가 true 이면 querystring.parse( parsedObject.query ) 와 같은 효과.
console.log(
	url.parse('http://www.hanb.co.kr/book/look.html?isbn=978-89-7914-874-9', true));
