// Swapping Two Values

var x = [2, 3, 5, 7, 6];

function swap_two(arr) {
	if (arr.length < 2) {
		return null;
	}
	var temp = arr[0];
	arr[0] = arr[arr.length - 1];
	arr[arr.length - 1] = temp;
	return arr;
}

swap_two(x);
console.log(x);
