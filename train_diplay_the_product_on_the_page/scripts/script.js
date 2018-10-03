var goods = {
	"28292": {
		"name": "Банан",
		"cost": 30,
		"img": "https://cdn0.iconfinder.com/data/icons/fruit-and-vegetable-15/200/yellow_banana_fruit_vegetable-128.png",
		"sklad": "да"
	},
	"23729": {
		"name": "Помидор",
		"cost": 40,
		"img": "https://cdn0.iconfinder.com/data/icons/fruits/128/Tomato.png",
		"sklad": "нет"
	},
	"11223": {
		"name": "Клубника",
		"cost": 60,
		"img": "https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Strawberry-128.png",
		"sklad": "да"
	}
};

var out = '';
for (var key in goods) {
	out += 'Название: ' + goods[key].name + '<br>';
	out += 'Цена: ' + goods[key].cost + '<br>';
	out += 'Наличие: ' + goods[key].sklad + '<br>';
	// <img src="">
	out += '<img src="' + goods[key].img + '">';
	out += '<hr>';
}
document.getElementById('out').innerHTML = out;