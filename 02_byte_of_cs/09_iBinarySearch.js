function iBinarySearch(arr, val) {
	var min = 0;
	var max = arr.length - 1;

	while (min <= max) {
		var midpoint = Math.floor((min + max) / 2);
		if (val > arr[midpoint]) {
			min = midpoint + 1;
		}
		else if (val < arr[midpoint]) {
			max = midpoint - 1;
		}
		else {
			return midpoint;
		}
	}

	return false;
}

var arr = [-90, -10, 0, 2, 12, 29, 33, 190, 320];
var result = iBinarySearch(arr, 29);
console.log(result);
