// ES6 - JS ECMASCRIPT PHIÊN BẢN 6, 2015, ĐƯA RA KHÁI NIỆM MODULE, 
// ESM - ECMASCRIPT MODULE 
// MỖI FILE .JS ĐƯỢC ĐÓNG KÍN, PRIVATE CÁC HÀM VÀ BIẾN, GIẢ SỬ FILE A.JS THÌ SẼ KO THỂ THẤY CÁC HÀM TRONG FILE B.JS NGOẠI TRỪ B.JS QUYẾT ĐỊNH PUBLIC CÁC HÀM RA CHO BÁ TÁNH XÀI -> PUBLIC GỌI LÀ EXPORT

// CÓ 2 LOẠI EXPORT: 
// EXPORT: 
// EXPORT DEFAULT
// 1 TẬP TIN .JS NẾU CÓ EXPORT DEFAULT THÌ CHỈ CÓ DUY NHẤT 1 CHỮ DEFAULT

// EXPORT ~~~ PUBLIC BÊN JAVA KHI NÓI VỀ HÀM TRONG CLASS 
// MODULE | FILE .JS 					~~~ CLASS JAVA
//	+ EXPORT 							PUBLIC 

export default function map(arr, fCallback){

	const result = [];		// mảng rỗng để chuẩn bị clone data qua

	for(let i = 0; i < arr.length; i++){
		let tmp = fCallback(arr[i]);
		result.push(tmp);
	}

	return result;
}

// export default map dùng ở trên hoặc lẻ dưới, 1 trong 2









