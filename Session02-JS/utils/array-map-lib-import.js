// XÀI THƯ VIỆN NƠI KHÁC, TRONG FILE .JS KHÁC
// LƯU Ý FILE .JS KHÁC PHẢI EXPORT THÌ MÌNH MỚI GỌI HÀM ĐƯỢC

import map from'./array-map-lib.js';

console.log("map called by lib using import", map([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], x => x/2))