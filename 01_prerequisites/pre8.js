// Greater Than Y

var x = [1, 3, 5, 7];
var y = 3;

function grt_than_y(arr, y) {
	var count = 0;
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] > y) {
			count++;
		}
	}
	return count;
}

console.log(grt_than_y(x, 3));
