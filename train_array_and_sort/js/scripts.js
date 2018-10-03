		// Задачка 1

var x, a;
a = +prompt("Введите второе число (делимое) a: ");
x = +prompt("Введите первое число (делитель) x: ");
c = a % x;
if ( c == 0 ) {
	console.log("Первое число " + a + " кратно числу " + x);
} else {
	console.log("Извините, но " + a + " делится на " + x + " с остатком");
}


		// Задачка 2

function compareNumeric(a,b) {
	return a - b;
}

var arr = [];
var n = +prompt("Введите ограничитель ячеек в массиве (сколько штук): " + n);
for (var i = 0; i < n; i++) {
	arr[i] = +prompt("Введите число: " + i);
}
arr.sort(compareNumeric);
console.log( arr );




