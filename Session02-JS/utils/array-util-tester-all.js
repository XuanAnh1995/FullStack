// XÀI THƯ VIỆN array-util.js ở cùng 1 thư mục ./

import * as ArrayUtils from "./array-util.js";
// Mọi hàm bên trong file ./array-util.js được gọi tên chung là ArrayUtils
// Sờ hàm thông qua tên này chấm  ví dụ: 	ArrayUtils.print()
//								ArrayUtils.map()			
// riêng thằng default ko gọi tên nó: 		ArrayUtils.default()
	
const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// in thử heng
console.log("Test thử hàm print");
ArrayUtils.print(arr, x => console.log(x));

// TĂNG MỖI PHẦN TỬ LÊN 5 ĐƠN VỊ
// console.log("Cộng mảng lên 5 -map", ArrayUtils.map(arr, x => x + 5))
console.log("Cộng mảng lên 5 -map", ArrayUtils.map(arr, x => x + 5))
// print(ArrayUtils.map(arr, x => x + 5), x => console.log(x));

// TEST FILTER
console.log("Lọc mảng - filter", ArrayUtils.default(arr, x => x >= 30))