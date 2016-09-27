function iFactorial(num) {
	if (num < 1) {
		return null;
	}
	var fact = 1;
	for (var i = 1; i <= num; i++) {
		fact *= i;
	}
	return fact;
}

var result = iFactorial(4);
console.log(result);
