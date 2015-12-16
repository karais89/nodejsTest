// cmd call node 3.5.js --exit 10000
// process.argv 실행 매개 변수
process.argv.forEach(function (item, index) {
	// 출력
	console.log(index + ' : ' + typeof(item) + ' : ', item);
	
	if(item == '--exit') {
		// 다음 실행 매개변수를 얻음
		var exitTime = Number(process.argv[index + 1]);
		
		// 일정 시간후 프로그램 종료
		setTimeout(function() {
			process.exit();
		}, exitTime);
	}	
});
