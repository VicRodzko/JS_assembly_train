autoSlider(); 
var left = 0;
var timer = 0;

function autoSlider() {
	timer = setTimeout(function () {
		var polosa = document.getElementById('polosa');
		left = left - 128;
		if (left < -384) { // конечная позиция слайдера (правая), чтобы слайдер не прокручивался бесконечно
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left + 'px'; // команда left работает только с position: relative или fixed
		autoSlider(); // зацикливание (вызов снова)
	}, 1000);
}

