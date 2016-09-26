var arr =[24, 8, 23, 3];

function linear_search(num, arr) {
	for (var i = 0, j = arr.length; i < j; i++) {
		if (arr[i] == num) {
			return i;
		}
	}
	return false;
}

var result = linear_search(4, arr);
console.log(result);
