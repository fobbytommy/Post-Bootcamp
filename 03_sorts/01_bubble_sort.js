function bubble_sort(arr) {
	
	for (var i = 0, j = arr.length - 1; i < j; j--) {
		for (var k = i; k < j; k++) {
			if (arr[k] > arr[k + 1]) {
				var temp = arr[k];
				arr[k] = arr[k + 1];
				arr[k + 1] = temp;
			}
		}
	}
	return arr;
}

var arr = [5, 3, 6, 1, 4, 2, 2, 3, -2, 5, 6, 10, 2, 390, 20, 3, 2, 659, 3, 0, 9];
console.log(bubble_sort(arr));
