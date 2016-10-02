function quick_sort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	var pivot = arr[0];
	var left = [];
	var right = [];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		}
		else {
			right.push(arr[i]);
		}
	}

	return quick_sort(left).concat(pivot).concat(quick_sort(right));
}

var arr = [5, 13, 6, 1, 4, 2, 12, 33, -2, 52, -6, 10, 22, 390, 20, -3, 14, 659, 3, 0, 9];
// var arr = [4, 3, 2, 5, 6, 1];
console.log(quick_sort(arr));
