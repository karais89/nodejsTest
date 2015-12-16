var crypto = require('crypto');

// 해시 생성.
var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// 출력.
console.log('crypto_hash : ', output);

// 해시는 다른 문자열이라도 같게 나올 수 있음. 따라서 해시를 원래 값으로 돌리는 것은 불가능.
// 돌리지 못하기에 사용한다.
// 사용자의 비밀번호를 해시화해서 저장 서버에는 해시화된 비밀번호만 존재.
// 해시화된 비밀번호를 알아도 이걸로 로그인을 하려면 또 다른 해시로 변환되므로 로그인이 블가능.

// 원본 문자열이 조금이라도 다르면 해시 형태가 굉장히 많이 달라짐. 이를 눈사태 효과라고 함.