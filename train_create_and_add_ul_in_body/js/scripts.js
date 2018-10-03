// Создание и добавление <ul> в <body>

var elem2 = document.createElement("ul");
document.body.appendChild(elem2);

// Функция создания <li>, заполнения текстом и добавление к <ul>

function addElement(text) {
	var elem = document.createElement("li");
	elem.textContent = text;
	elem2.appendChild(elem);
}

// Цикл ввода текста <li> и проверка

var a = true, b;
while (a == true) {
	b = prompt("Введите текст для вашего <li>");
	addElement(b);
	a = confirm("Хотите добавить ещё <li>?");
}

