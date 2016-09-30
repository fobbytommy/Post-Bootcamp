function selection_sort(arr) {
	var array_length = arr.length;
	for (var i = 0; i < array_length - 1; i++) {
		var select = i
		for (var k = i + 1; k < array_length; k++) {
			if (arr[k] < arr[select]) {
				select = k;
			}
		}
		if (select != i) {
			var temp = arr[i];
			arr[i] = arr[select];
			arr[select] = temp;
		}
	}
	return arr;
}
var arr = [5, 13, 6, 1, 4, 2, 12, 33, -2, 52, -6, 10, 22, 390, 20, -3, 14, 659, 3, 0, 9];
console.log(selection_sort(arr));
