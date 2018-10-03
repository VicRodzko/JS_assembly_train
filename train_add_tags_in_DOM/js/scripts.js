var arrAllElem = [];

var control = true;
var i = 0;

while (control == true) {
	var tagName = prompt("Введите элемент который хотите добавить на страницу (например: div, p, h1, a, img): ")

	arrAllElem[i] = tagName;

		switch (arrAllElem[i]) {
			case 'div':
			case 'p':
			case 'h1':
			case 'a':
			case 'img':
				if (arrAllElem[i] == 'div') {
					switch (arrAllElem[i-1]) {
						case 'p':
						case 'h1':
						case 'a':
						case 'img':
							alert('Сорян, <div> обычно является контейнером!')
						break;
					}
				} else if (arrAllElem[i] == 'p') {
					switch (arrAllElem[i-1]) {
						case 'a':
						case 'img':
							alert('Сорян, не стоит строчный в блочный кидать!')
						break;
					}
				} else if (arrAllElem[i] == 'h1') {
					switch (arrAllElem[i-1]) {
						case 'a':
						case 'img':
							alert('Сорян, не стоит строчный в блочный кидать!')
						break;
					}
				}

			var textInsert = prompt("Введите текст (он вставится в элемент, который Вы только что вставили): ");
			control = confirm("Хотите ввести ещё один элемент?");

			var elem = document.createElement(tagName);
			elem.textContent = textInsert;
	
			document.body.appendChild(elem); 
			break;
			
			default:
    			alert('Попытка обмана!!! Введите правильный тег (пять вариантов на выбор)');
    	}
	i++;	
}	