const s = {id: "SE01", name: "An Nguyễn", yob: 2005};

/*

// LẤY INFO TRONG OBJECT THEO STYLE CỔ ĐIỂN TRUYỀN THỐNG

const id = s.id;
const name = s.name;
const namSinh = s.yob;

console.log("Thông tin sinh viên (Style truyền thống): ", id, name, namSinh);

*/

// destruturing 
//			alias tên giả cho tên gốc
const {id, yob: namSinh, name} = s;	// xài trong props đầu vào của component React

console.log("Thông tin sinh viên (Style hiện đại): ", id, name, namSinh);