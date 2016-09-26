// Number to String

var x = [-1, -3, 2];
function num_to_str(arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] < 0) {
			arr[i] = 'Dojo';
		}
	}
	return arr;
}
num_to_str(x);
console.log(x);
