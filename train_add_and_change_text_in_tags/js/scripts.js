function out() {
	var p;
	p = document.getElementById("out");
	// p.innerHTML = "Hello";
	
	// дописать информацию
	// p.innerHTML += " <b>Hello</b> ";
	// p.innerText += " <b>Hello</b> "; - для IE (теги не обрабатываются)
	
	// p.insertAdjacentHTML("beforeBegin", "Hi");
	// beforeBegin - перед открывающим тегом
	// p.insertAdjacentHTML("afterBegin", "Hi");
	// afterBegin - после открывающего тега
	// p.insertAdjacentHTML("beforeEnd", "Hi");
	// beforeEnd - перед закрывающим тегом
	// p.insertAdjacentHTML("afterEnd", "Hi");
	// afterEnd - после закрывающего тега

	p.outerHTML = '<div class="one"> hello </div>';  // заменяет полностью тег и содержимое, но оформление css останется.
}