// Random Array

function random_arr() {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.floor(Math.random() * 101));
	}
	return arr;
}
console.log(random_arr());
