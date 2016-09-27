function rFactorial(num) {
	if (num == 1) {
		return 1;
	}
	else {
		return rFactorial(num - 1) * num;
	}
}

var result = rFactorial(4);
console.log(result);
