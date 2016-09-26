// Max, Min, and Average

var x = [1, 5, 10, -2];

function max_min_avg(arr) {
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	var avg;

	for (var i = 1, j = arr.length; i < j; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	avg = sum / arr.length;

	return [max, min, avg];
}
console.log(max_min_avg(x));
