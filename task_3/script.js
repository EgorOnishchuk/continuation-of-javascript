/*
	1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
*/
document.addEventListener('DOMContentLoaded', () =>
	console.log('Все теги прогрузились')
);

/*
	2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
*/
window.addEventListener('load', () => console.log('Страница загрузилась'));

/*
	3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
	- Класс "super_element" присутствует в элементе "div".
	- сообщение должно определять присутствует или отсутствует класс "super_element"
	- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
	- которому был совершен клик.
	- Необходимо использовать делегирование.
*/

function logClassPresenceInElement(event) {
	let presence;
	event.target.classList.contains('super_element')
		? (presence = 'присутствует')
		: (presence = 'отсутствует');
	console.log(
		`Класс "super_element" ${presence} в элементе с тегом "${event.target.tagName.toLowerCase()}"`
	);
}

document.body.addEventListener('click', logClassPresenceInElement);

/*
	4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
*/
document
	.querySelector('textarea')
	.addEventListener('mouseover', () => console.log('Вы навели на textarea'));

/*
	5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который
	записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не
	нужно. Необходимо использовать делегирование.
*/

const logButtonText = (event) => {
	if (event.target.tagName.toLowerCase() === 'button') {
		console.log(event.target.innerText);
	}
};

document.querySelector('ul').addEventListener('click', logButtonText);

/*
	7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/

const list_items = document.querySelectorAll('li');
for (let i = 1; i < list_items.length; i += 2) {
	list_items[i].style.backgroundColor = 'green';
}
