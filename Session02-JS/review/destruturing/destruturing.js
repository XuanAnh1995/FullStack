const arr = [5, 10, 15, 20];

// LẤY PHẦN TỬ MẢNG ĐỂ XÀI - STYLE KIỂU TRUYỀN THỐNG

const a1 = arr[0];
const a2 = arr[1];
const a3 = arr[2];
const a4 = arr[3];

console.log("Các giá trị của mảng (style truyền thống): ", a1, a2, a3, a4);

const [e1, e2, e3, e4] = arr;	// destruturing

console.log("Các giá trị của mảng (style hiện đại): ", e1, e2, e3, e4);