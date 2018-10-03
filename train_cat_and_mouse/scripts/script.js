document.onmousemove = function() {
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn0.iconfinder.com/data/icons/yooicons_set09_halloween/512/cheshire_cat.png" id="cat">');
	var cat = document.getElementById("cat");
	cat.style.width = 48 + 'px';
	cat.style.height = 48 + 'px';
	cat.style.position = "fixed";
	cat.style.transitionDuration = '.2s';

	document.onmousemove = function(event) {
		cat.style.left = event.clientX - 50 + "px";
		cat.style.top = event.clientY + 10 + "px";
	}
}