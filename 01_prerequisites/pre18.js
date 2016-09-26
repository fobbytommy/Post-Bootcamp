// Removing Negatives

var x = [0, -1, 2, -3, 4, -5, 6];

function remove_negative(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			for (var j = i; j < arr.length - 1; j++) {
				arr[j] = arr[j + 1];
			}
			arr.pop();
		}
	}
	return arr;
}

remove_negative(x);
console.log(x);
