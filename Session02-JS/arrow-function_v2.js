// VIẾT HÀM TÍNH DIỆN TÍCH HÌNH TRÒN
// S = PI * R^2; = 3.14 * 2.0 ^ 2 = 12.56

/*
function getDiskArea(r) {
	return 3.14 * r * r;
}
*/

const fArea =  r => 3.14 * r * r;

// run, call
console.log("Diện tích hình tròn có bán kính r = 2.0 là: " + fArea(2.0));