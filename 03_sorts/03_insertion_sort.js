function insertion_sort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var element = arr[i];
		var j = i;
		while (j > 0 && arr[j - 1] > element) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = element;
	}
	return arr;
}
var arr = [5, 13, 6, 1, 4, 2, 12, 33, -2, 52, -6, 10, 22, 390, 20, -3, 14, 659, 3, 0, 9];
console.log(insertion_sort(arr));
