function map(arr, fCallback){

	const result = [];		// mảng rỗng để chuẩn bị clone data qua

	for(let i = 0; i < arr.length; i++){
		let tmp = fCallback(arr[i]);
		result.push(tmp);
	}

	return result;
}

// const fXXX = function powByTwo(x) { return x * x; }	
const fXXX = x => x * x;

// xài
console.log(map([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], fXXX));

// TUI MUỐN -1 MỖI PHẦN TỬ 
console.log(map([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], x => x - 1));

// HÀM CHUẨN JS VỀ MẢNG ĐÃ LÀM HÀM NÀY RỒI
const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log("Mảng được map từ mảng gốc" , arr.map(x => x-1));