var i, number;								// quest of variables
var sum = 0;								// quest of variables

for (i = 0; i < 5; i++) {					// condition 5 time repeat
	number = +prompt("Введите цифру или число, положительное или отрицательное: ", " ");   // 5 number with keyboard
	console.log(number);					// console
	
	if (number > 0) {						// condition of positive (>zero)
		sum = sum + number;					// sum of positive (>zero)
	}
}

alert(sum);