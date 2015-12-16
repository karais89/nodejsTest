var crypto = require('crypto');

// 변수선언.
var key = '아무도 알지 못하는 나만의 비밀 키';
var input = 'PASSWORD';

// 암호화. 
var clipher = crypto.createCipher('aes192', key);
clipher.update(input, 'utf8', 'base64');
var cipheredOutput = clipher.final('base64');

// 암호화 해제.
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// 출력.
console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);

