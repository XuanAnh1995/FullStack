// 1. VIẾT HÀM IN RA MÀN HÌNH CÂU CHÀO "HELLO JS, NODE, REACT - JAN.2026"
// 2. VIẾT HÀM TRẢ VỀ DIỆN TÍCH HÌNH CHỮ NHẬT

/*
function greet() {
	console.log("HELLO JS, NODE, REACT - JAN.2026");
}

greet();

// CHUYỂN HÀM THÀNH ẨN DANH, XÓA TÊN GỐC, THAY BẰNG NICK NAME
const gt =  () => console.log("HELLO JS, NODE, REACT - JAN.2026");

gt();

*/

// XÓA LUÔN BIẾN, GỌI HÀM ĐƯỢC KO?
//const gt =  () => console.log("HELLO JS, NODE, REACT - JAN.2026");
//	    --       ------------------------------------------------------------------
//gt();

(() => console.log("HELLO JS, NODE, REACT - JAN.2026! CRAZY !!!"))()
//-----------------------------------------------------------------
//				gt							()

console.log("Diện tích HCN 5x20 là: " + ((width, length) => width * length)(5, 20));

const getAreaRectangle = (width, length) => width * length;

console.log("Diện tích HCN 10x30 là: " + getAreaRectangle(10, 30));

/*

1. ỨNG DỤNG HÀM MŨI TÊN - ARROW FUNCTION
// NHỜ CALLBACK, HÀM fMain thoải mái mở rộng khả năng, khả năng trong tương lai vì fCallback được đưa vào từ bên ngoài, mà đâu biết hàm ngoài làm được trò gì. Cứ đưa vào tao gọi. fMain đa năng nhờ fCallback đưa vào!!!

function fMain(fCallback){
	// Code chính cứ làm
	// gọi fCallback()		// hàm bên ngoài đưa vào qua tham số; trong hàm 
					// fMain gọi lúc nào đó -callback
	// mình chủ động gọi các hàm thư viện -> ko gọi callback
}

<button id="btnHitme"> Hit me!</button>
<script>
	const btn = document.getElementById("btnHitme");
	
	btn.addEventListener(click, () => {tùy ý dân dev muôn nút bấm làm gì})
	// nut bấm đa năng
</script>

* NHỮNG ỨNG DỤNG NỔI TIẾNG CỦA CALLBACK FUNCTION, ARROW FUNCTION
- LẬP TRÌNH XỬ LÍ SỰ KIỆN NÚT BẤM, BẤM -> THÌ LÀM GÌ ? TÙY DEV CODE, NHẬN VÀO ẨN DANH

- GIÚP COLLECTION(LIST, SET, MAP) , MẢNG, LÀ NHỮNG ĐỐI TƯỢNG CHỨA NHIỀU DỮ LIỆU NHƯNG KO DỰ ĐOÁN CHÍNH XÁC NHU CẦU DỮ LIỆU CỤ THỂ CỦA AI ĐÓ. 
	TUI CÓ DẠNH SÁCH SV (LƯU TRONG MẢNG, LIST, ...) -> KO BIẾT NÊN TÍNH 	TOÁN THỐNG KÊ TRÊN ĐÁM DATA NÀY NHƯ THẾ NÀO , THỐNG KÊ THEO TÊN, TỈNH, ĐIỂM, NGÀNH, THEO KHÓA, HAY VỪA KHÓA, VỪA NGÀNH, ... VÔ CHỪNG  
	==>> NÊN LÀM HÀM SERVICE/ON-DEMAND (YÊU CẦU CHI TIẾT ĐƯA 	VÔ - () => {})

- JAVA: STREAM-API , BIỂU THỨC LAMBDA forEach(x -> ...)
- C#: LINQ, BIỂU THỨC LAMBDA

- JS: map, filter, reduce của Array!!!!!!!!!!!!


>>>> HÀM MŨI TÊN, HÀM ẨN DANH ĐƯỢC DÙNG NHIỀU TRONG CALLBACK, HÀM CALLBACK TRUYỀN VÀO HÀM MAIN ĐỂ MỞ RỘNG KHẢ NĂNG CỦA HÀM MAIN ĐẾN VÔ TẬN, HÀM MAIN() CHƠI ĐƯỢC VỚI NHỮNG YÊU CẦU XỬ LÍ Ở THÌ TƯƠNG LAI, NÓ CHỈ ĐI GỌI CHÍNH THẰNG CALLBACK LÀM GIÚP, HỖ TRỢ XỬ LÍ 
- HAY DÙNG Ở NHỮNG HÀM MAIN() CÓ NHIỀU DATA, CHỜ AI ĐÓ ĐƯA VÀO QUY TẮC XỬ LÝ 
- JAVA, C#, Y CHANG CÁCH TIẾP CẬN
*/

// TUI CÓ 1 MẢNG SỐ NGUYÊN HARD-CODE
// [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// VIẾT 1 HÀM XỬ LÝ DATA TRÊN MẢNG, TRẢ VỀ MẢNG MỚI Y CHANG SỐ PHẦN TỬ MẢNG GỐC, NHƯNG MỖI PHẦN TỬ ĐÃ BỊ BIẾN ĐỔI 
// VÍ DỤ: MỌI PHẦN TỬ +1, -1, X2, ^3, ... 
// LÀM HÀM THỎA ĐƯỢC CÁC NHU CẦU TRÊN, VÀ CÒN CÁC NHU CẦU KHÁC ; CHẮC CHẮN LÀ callback

// HÀM GIỮ NGUYÊN SỐ LƯỢNG PHẦN TỬ, NHƯNG CHỈ BIẾN ĐỔI GIÁ TRỊ PHẦN TỬ -> GỌI LÀ HÀM map(), ánh xạ từ gốc sang phiên bản mới

//     [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// -1  |    |    |   |    |    |     |    |   |     |
//     [4, 9, 14, 19, 24, 29, 34, 39, 44, 49]

function map(arr, fCallback){

	const result = [];		// mảng rỗng để chuẩn bị clone data qua

	for(let i = 0; i < arr.length; i++){
		let tmp = fCallback(arr[i]);
		result.push(tmp);
	}

	return result;
}


// VIẾT 1 HÀM XỬ LÝ DATA TRÊN MẢNG, HÀM NÀY TRẢ VỀ MẢNG MỚI ,
// SỐ PHẦN TỬ BỊ HỤT SO VỚI MẢNG GỐC
// BỊ HỤT VÌ MỖI PHẦN TỬ BỊ CHECK VAR THEO ĐK NÀO ĐÓ, THỎA THÌ VÀO TẬP KẾT QUẢ, KO THỎA THÌ ĐI CHỖ KHÁC
// THỎA LÀ SAO? : MÀY CHIA HẾT 2 KO, LÚC KHÁC: MÀY CHIA HẾT 5 KO, MÀY NGUYÊN TỐ KO,...
// WHERE TRONG CSDL : VÔ CHỨNG
// LÀM HÀM THỎA  CÁC NHU CẦU TRÊN, VÀ CÒN CÁC NHU CẦU KHÁC; Chắc chắn Callback
// CALLBACK TRẢ VỀ TRUE/FALSE -> PREDICATE FUNCTION;HÀM MỆNH ĐỀ TRẢ VỀ KẾT LUẬN ĐÚNG SAI, HÀM TRUE/FALSE

// HÀM KO DỮ NGUYÊN SỐ LƯỢNG PHẦN TỬ, BỊ HỤT VÌ VÀI ĐỨA BỊ CHECK VAR BẮT LẠI HÀM filter()

//                     [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// chia hết cho 3  |    |    |   |    |    |     |    |   |     |
//     			[         15, 		30,		45	 ]

function filter(arr, fCallback){
	
	const result = [];

	for(let i = 0; i < arr.length; i ++){
		if(fCallback(arr[i])){
			result.push(arr[i]);
		}
	}
		
	return result;
}

const even = function checkEven(n) {
	if(n % 2 === 0)
		return true;
}

// Xài 
console.log("Filter chia hết cho 2: ", filter([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], even))












































