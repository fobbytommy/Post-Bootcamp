// Find Max

var x = [-3, 3, 5, 7];

function find_max(arr) {
	if (arr == undefined) {
		return "there is no arugment";
	}
	else if (arr instanceof Array == false) {
		return "given argument is not an array!";
	}
	else if (arr.length < 1) {
		return "given array is empty";
	}
	var max = arr[0];

	for (var i = 1, j = arr.length; i < j; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
console.log(find_max(x));
