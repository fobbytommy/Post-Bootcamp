// Find Average

function array_avg(arr) {
	var sum = 0, avg;
	for (var i = 0, j = arr.length; i < j; i++) {
		sum += arr[i];
	}
	avg = sum / arr.length;
	return avg;
}

var x = [1, 3, 5, 7, 20];
console.log(array_avg(x));
