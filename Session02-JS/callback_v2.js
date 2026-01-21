const listInt = () => {
	
	console.log("The list of numbers from 1 to 100:  ");
		
	for(let i = 1; i <= 100; i++){
		console.log(i);
	}
}	// em ngồi đó chờ manager call back
///////////////////////////////////////////////////

function printManager(f) {
    console.log("Do something for this function itself !!! Xử lý riêng hàm");

	// nhớ rằng, gọi ngược lại, triệu hồi thằng ku hàm f
	f();	// f là hàm ko tham số đưa vào
}

printManager(listInt);

