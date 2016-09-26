// Eliminate Negative Numbers

var x = [1, 5, 10, -2];

function zero_negative(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}
zero_negative(x);
console.log(x);
