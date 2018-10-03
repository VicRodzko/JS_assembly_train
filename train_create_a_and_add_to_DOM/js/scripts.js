var arr = [];
var cheking = true;
var i = 0;

// Цикл введения с клавиатуры текста для ссылки и запрос на повторение.

while (cheking == true) {
	arr[i] = prompt("Введите текст для вашей ссылки: ");
	cheking = confirm("Хотите создать ещё одну ссылку?");
	i++;
}

// Функция создания ссылок и заполнение текстом (с добавлением атрибута href)

function getText(text) {
	var elem = document.createElement("a");
	elem.textContent = text;
	elem.setAttribute("href", "#");
	return elem;
}

// Функция создания <div>. Все <a> в <div>. Добавление в body.

function getTwoA() {
	var elem2 = document.createElement("div");
		
		for (var i = 0; i < arr.length; i++) {
			elem2.appendChild(getText(arr[i]));
		}
	document.body.appendChild(elem2);
}

getTwoA();

// Перенос строки

var elem4 = document.getElementsByTagName("a");
for (var i = 0; i < elem4.length; i++) {
	elem4[i].innerHTML += "<br>";
}




