// Shifting the Values in the Array

var x = [1, 5, 10, 7, -2];

function shift_arr(arr) {
	for (var i = 0, j = arr.length - 1; i < j; i++) {
		arr[i] = arr[i + 1];
	}
	arr[arr.length - 1] = 0;
	return arr;
}
shift_arr(x);
console.log(x);
