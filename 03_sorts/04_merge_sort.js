function mergeSort(arr) {
	if (arr.length < 2) { // base case
		return arr;
	}
	var middle = Math.floor(arr.length / 2);
	var left = arr.slice(0, middle);
	var right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	var sorted_arr = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sorted_arr.push(left.shift());
		}
		else {
			sorted_arr.push(right.shift());
		}
	}

	while (left.length) {
		sorted_arr.push(left.shift());
	}
	while (right.length) {
		sorted_arr.push(right.shift());
	}

	return sorted_arr;
}

var arr = [5, 13, 6, 1, 4, 2, 12, 33, -2, 52, -6, 10, 22, 390, 20, -3, 14, 659, 3, 0, 9];
console.log(mergeSort(arr));
