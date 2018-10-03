function plus() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 + num2;
	document.getElementById("out").innerHTML = "Результат: " + result;
}

function minus() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 - num2;
	document.getElementById("out").innerHTML = "Результат: " + result;
}
function mnog() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 * num2;
	document.getElementById("out").innerHTML = "Результат: " + result;
}
function delenye() {
	var num1, num2, result;
	num1 = document.getElementById("n1").value;
	num1 = parseInt(num1);

	num2 = document.getElementById("n2").value;
	num2 = parseInt(num2);

	result = num1 / num2;
	if (num2 == 0) {
		alert("Делитель не может быть равен 0")
	} else {
		document.getElementById("out").innerHTML = "Результат: " + result;
	}
}