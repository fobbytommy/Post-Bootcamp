function rSum(num) {
	if (num == 1) {
		return 1;
	}
	else {
		return rSum(num - 1) + num;
	}
}

var result = rSum(3);
console.log(result);
