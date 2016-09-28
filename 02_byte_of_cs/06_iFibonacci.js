function iFibonacci(num) {
	var fibs = [0, 1];
	for (var i = 0; i < num; i++) {
		fibs.push(fibs[0] + fibs[1]);
		fibs.shift();
	}
	return fibs[0];
}

var result = iFibonacci(6);
console.log(result);
