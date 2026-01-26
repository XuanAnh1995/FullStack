const os = require("os");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("===== THÔNG TIN HỆ THỐNG =====");

// 1. Tên máy tính
console.log("Tên máy tính:", os.hostname());

// 2. Hệ điều hành
console.log("Hệ điều hành:", os.type(), os.release());

// 3. Danh sách ổ đĩa logic (Windows)
console.log("\n===== Ổ ĐĨA LOGIC =====");
try {
    const drives = execSync("wmic logicaldisk get name", { encoding: "utf8" })
        .split("\n")
        .map(d => d.trim())
        .filter(d => d && d !== "Name");

    console.log("Các ổ đĩa:", drives.join(", "));
} catch (err) {
    console.log("Không thể lấy danh sách ổ đĩa:", err.message);
}

// 4. Thư mục chứa file JS đang chạy
const currentDir = __dirname;
console.log("\n===== THƯ MỤC CHỨA FILE JS =====");
console.log("Đường dẫn:", currentDir);

// 5. Liệt kê các file & thư mục trong thư mục hiện tại
console.log("\n===== DANH SÁCH FILE / THƯ MỤC =====");

try {
    const items = fs.readdirSync(currentDir, { withFileTypes: true });

    items.forEach(item => {
        const type = item.isDirectory() ? "[DIR]" : "[FILE]";
        console.log(`${type} ${item.name}`);
    });
} catch (err) {
    console.log("Không thể đọc thư mục:", err.message);
}
