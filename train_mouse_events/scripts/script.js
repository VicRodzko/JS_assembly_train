var block = document.getElementById("one");

// click mouse
	block.onclick = function () {
		this.style.background = "green";
		this.onclick = null;
	}

// double click
	block.ondblclick = function() {
		this.style.background = "red";
	}

// правый клик мышкой
	block.oncontextmenu = function() {
		this.style.background = "black";
		return false;
	}

// правая кнопка мыши не вызывает меню на странице (защита от копирования)
	document.oncontextmenu = function() {
		return false;
	}

// мышь входит на элемент
	block.onmouseenter = function() {
		console.log('in!!!');
		this.style.background = "gold";
	}

// мышь уходит с элемента
	block.onmouseleave = function() {
		this.style.background = "orange";
	}

// движение мышью в нутри блока
	var a = 0;
	block.onmousemove = function() {
		a++;
		this.style.width = 100 + a + "px";
	}

// нажимаем и держим кнопку мыши (любую)
	block.onmousedown = function(event) {
		this.style.background = "cyan";
		console.log("button: " + event.button); // 0, 1 или 2 - кнопки мышки какие были нажаты пользоваталем (разные в разных браузерах
		console.log("which: " + event.which); // 1, 2 или 3 - кнопки мышки (вроде как одинаковые во всех браузерах)
	}

// нажимаем мышку где угодно а отпустить можем только внутри блока
	block.onmouseup = function() {
		this.style.background = "pink";
	}
