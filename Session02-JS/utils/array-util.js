// 3 HÀM CỦA 1 TẬP TIN .JS ĐỂ XỬ LÝ MẢNG, XEM NÓ LÀ 1 ESM - ECMASCRIPT MODULE
// 1 HÀM DUY NHẤT NÀO ĐÓ ĐƯỢC QUYỀN EXPORT DEFAULT
// ĐÁM HÀM CÒN LẠI CHỈ ĐƯỢC MANG EXPORT
// EXPORT: PUBLIC CHO NƠI XÀI, NƠI XÀI PHẢI IMPORT
// CÓ 2 NƠI ĐỂ GHI EXPORT, EXPORT DEFAULT
// - EXPORT TRƯỚC TỪ FUNCTION
// - EXPORT Ở CUỐI ĐÁY FILE

function print(arr, fCallback){
	arr.forEach(fCallback);
}

function map(arr, fCallback){

	const result = [];		// mảng rỗng để chuẩn bị clone data qua

	for(let i = 0; i < arr.length; i++){
		let tmp = fCallback(arr[i]);
		result.push(tmp);
	}

	return result;
}

function filter(arr, fCallback){
	
	const result = [];		// mảng rỗng để chuẩn bị clone data qua

	for(let i = 0; i < arr.length; i ++){
		if(fCallback(arr[i])){
			result.push(arr[i]);
		}
	}
		
	return result;
}
export { print };
export { map };
export default filter;