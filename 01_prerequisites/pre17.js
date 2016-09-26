// Insert X in Y

var arr = [1, 3, 5, 7];
var x = 10;
var y = 2;

function insert_x_in_y(arr, x, y) {
	for (var i = arr.length; i > y; i--) {
		arr[i] = arr[i - 1];
	}
	arr[y] = x;
	return arr;
}
insert_x_in_y(arr, x, y);
console.log(arr);
