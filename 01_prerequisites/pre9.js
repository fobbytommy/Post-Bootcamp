// Square the Values

var x = [1, 5, 10, -2];

function sqr_arr(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		arr[i] *= arr[i];
	}
	return arr;
}
sqr_arr(x);
console.log(x);
