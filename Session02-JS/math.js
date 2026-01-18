// Viết hàm cộng trừ nhân chia 2 con số

function add(a, b){
	return a + b;
}

// call, run, invoke
console.log(add(30, 70));

// version 2 của hàm - hàm có nickname
const xxx = function addV2(a, b){
		return a + b;
};

// call, run, invoke
// console.log("add-v2: " + addV2(300, 700));	// 1000
console.log("add-v2 by nick: " + xxx(300, 700));	// 1000