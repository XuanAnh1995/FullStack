// CHALLENGE: IN RA CÁC SỐ TỪ 1 ĐẾN N

const listN = n => {
	console.log("The list of numbers from 1 to " + n);
	for(let i = 1; i <= n; i++){
		console.log(i);
	}
}

listN(1000);