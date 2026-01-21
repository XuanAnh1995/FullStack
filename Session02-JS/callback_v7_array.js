// VIẾT HÀM XỬ LÝ MẢNG ĐÁP ỮNG MỌI NHU CẦU TÍNH TOÁN TRÊN TỪNG PHẦN TỬ, TRẢ VỀ MẢNG MỚI

function double(x){
	return x * x;
}

function plusOne(x){
	return x + 1;
}

function printArrayOnDemand(fCond) {

	const arr = [5, 10, 15, 20, 1, 3, 5, 7, 9, 2, 4, 6, 8]; 
	const result = [];	// mảng rỗng sẽ được thêm  result.push(value)

	for(let i = 0; i < arr.length; i++){
		let tmp = fCond(arr[i])
		result.push(tmp);
	}

	return result;
}

// gọi hàm và in ra kq
const r = printArrayOnDemand(double);
console.log("Mảng được clone từ mảng gốc và bình phương mỗi cháu: " + r);

const r1 = printArrayOnDemand(plusOne);
console.log("Mảng được clone từ mảng gốc và cộng 1 mỗi cháu: " + r1);