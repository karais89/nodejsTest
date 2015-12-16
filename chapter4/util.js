var util = require('util');

// 매개변수로 입력한 문자열을 조합해 리턴.
var data = util.format('%d + %d = %d', 52, 273, 52 + 273);
console.log(data);