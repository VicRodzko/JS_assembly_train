function f1() {
	var p;
	p = document.getElementById("out");

	// заданное количество повторений

	for (var i = 0; i < 100; i += 2) {
		p.innerHTML += i + " ";
	}
}