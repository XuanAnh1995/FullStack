// XÀI THƯ VIỆN array-util.js ở cùng 1 thư mục ./

import { map as BinhNgo, print } from "./array-util.js";
import Tet2026 from "./array-util.js";		// trỏ đến thẳng default filter

const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// in thử heng
console.log("Test thử hàm print");
print(arr, x => console.log(x));

// TĂNG MỖI PHẦN TỬ LÊN 5 ĐƠN VỊ
// console.log("Cộng mảng lên 5 -map", map(arr, x => x + 5))
console.log("Cộng mảng lên 5 -map Binh Ngo", BinhNgo(arr, x => x + 5))
// print(map(arr, x => x + 5), x => console.log(x));

// TEST FILTER
console.log("Lọc mảng - filter Tet2026", Tet2026(arr, x => x >= 30))