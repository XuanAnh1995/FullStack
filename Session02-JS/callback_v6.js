// CHALLENGE: IN RA CÁC SỐ TỪ 1 ĐẾN N
const listN = n => {
	console.log("The list of numbers from 1 to " + n);
	for(let i = 1; i <= n; i++){
		console.log(i);
	}
}

// HÃY CHƠI STYLE printManager();
// HÀM ĐIỀU PHỐI NHẬN HÀM KHÁC ĐI VÀO, MÀ HÀM KHÁC, CALLBACK LÚC NÀY CÓ THÊM THAM SỐ

function printManager(f) {
	f(200);
}

console.log("Callback với đầu vào 200 ");
console.log("==================");
printManager(listN);

























