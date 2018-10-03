// Задачка 1

var elem = document.getElementsByTagName("p");
elem[0].style.fontSize = "30px";
elem[0].style.color = "green";
elem[0].classList.add("active");
console.log(elem[0]);


// Задачка 2

var elem2 = document.getElementsByTagName("p");
elem2[elem2.length - 1].classList.add("active");
console.log(elem2);


// Задачка 3

function getString(count) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < count; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

result = true;
i = 0;
var m = [];
var obj = {};

while (result == true) {
	var a = prompt("Введите логин пользователя: ", "");
	var b = +prompt("Сколько символов должно быть у вашего случайного пароля? Введите: ", "");
	
	m[i] = {
		login: a,
		password: getString(b),
	};
	i++;
	result = confirm("Хотите создать нового пользователя?");
}

console.log(m);