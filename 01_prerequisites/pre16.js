// Reversing

var x = [-3, 5, 1, 3, 2, 10];

function reverse_arr(arr) {
	var half = Math.floor(arr.length / 2);
	for (var i = 0; i < half; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

reverse_arr(x);
console.log(x);
