// 모듈 추출.
var os = require('os');

// 운영체제 모듈 사용.
console.log(os.hostname());				// 호스트 이름
console.log(os.type());					// os 이름.
console.log(os.platform());				// 플랫폼.
console.log(os.arch());					// 아키텍쳐.
console.log(os.release());				// 버전.
console.log(os.uptime());				// 실행된 시간.
console.log(os.loadavg());				// 로드 에버리지 정보를 담은 배열 리턴.
console.log(os.totalmem());				// 시스템의 총 메모리 반환.
console.log(os.freemem());				// 사용 가능한 메모리.
console.log(os.cpus());					// cpu의 정보를 담은 객체 리턴.
console.log(os.getNetworkInterfaces());	// 네트워크 인터페이스 정보를 담은 배열.