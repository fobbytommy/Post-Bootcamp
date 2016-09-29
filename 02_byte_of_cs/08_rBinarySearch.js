function rBinarySearch(arr, val, min, max) {
	if (min == undefined || max == undefined) {
		min = 0;
		max = arr.length - 1;
	}

	if (max < min) {
		return false;
	}
	else {
		var midpoint = Math.floor((min + max) / 2);
		if (val > arr[midpoint]) {
			return rBinarySearch(arr, val, midpoint + 1, max);
		}
		else if (val < arr[midpoint]) {
			return rBinarySearch(arr, val, min, midpoint - 1);
		}
		else {
			return midpoint;
		}
	}
}

var arr = [-90, -10, 0, 2, 12, 29, 33, 190, 320];
var result = rBinarySearch(arr, 33);
console.log(result);
