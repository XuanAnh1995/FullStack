// In ra các số lẻ từ 1 đến 100

const odds = () => {
	console.log("The list of odds from 1 to 100: ")
	for(let i = 1; i <= 100; i ++){
		if(i % 2 !== 0){
			console.log(i);
		}
	}
}

function printManager(f) {
	console.log("Do something for this function itself !!! Xử lý riêng hàm");

	f();	// triệu hồi f() từ bên ngoài
}

printManager(odds);
