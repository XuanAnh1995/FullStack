// Hàm tính diện tích hình tròn 

/*
// full truyền thống
function getDiskArea(r) {
	return 3.14 * r * r;
}
// xài: getDiskArea(2.0);
////////////////////////////////////////////////////////////////////////////

// con trỏ hàm , sD, trỏ thẳng tên hàm và content của hàm
// xài: sD(2.0);	// gọi hàm với bk 2.0
const sD = function getDiskArea(r) {
	return 3.14 * r * r;
}
////////////////////////////////////////////////////////////////////////////////

// anonymous function - hàm ẩn danh
// xài: sD(2.0);
const sD = function (r) {
	return 3.14 * r * r;
}
*/

//arrow function 
// xài: sD(2.0);
const sD =  r =>  3.14 * r * r;
console.log(sD(2.0));	// 12.56 mới mlem

// HÀM TÍNH DIỆN TÍNH HÌNH CHỮ NHẬT 2 CẠNH W, L
/*
function getRestArea(w, l){
	return w * l;
}

const sRest = function getRestArea(w, l){
	return w * l;
}

const sRest = function (w, l){
	return w * l;
}

const sRest =  (w, l) => w * l;

*/

const sD =  r =>  3.14 * r * r;
console.log("Diện tích hình tròn bk 2.0: " + sD(2.0));	// 12.56 mới mlem
const sRest = (w, l) => w * l;
console.log("Diện tích HCN 5x20: " + sRest(5, 20));	// 5 x 20 = 100







