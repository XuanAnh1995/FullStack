function filter(arr, fCallback){
	
	const result = [];

	for(let i = 0; i < arr.length; i ++){
		if(fCallback(arr[i])){
			result.push(arr[i]);
		}
	}
		
	return result;
}

/*
const even = function checkEven(n) {
	if(n % 2 === 0)
		return true;
}
*/

const ttdh = n => {
	if(n > 30 & n % 3 === 0)
		return true;
}
 
// Xài 
// console.log("Filter chia hết cho 2: ", filter([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], even))

// THÁCH THỨC DANH HÀI: IN RA NHỮNG SỐ CHIA HẾT CHO 3 VÀ LƠN HƠN 30
console.log("Filter chia hết cho 3 và > 30: ", filter([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], ttdh))

console.log(([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]).filter(n => {
	if(n > 30 & n % 3 === 0)
		return true;
}))
