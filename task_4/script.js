'use strict';

/*
	1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
	То есть при печати в input'е тег span также должен меняться.
*/

document
	.querySelector('input#from')
	.addEventListener(
		'input',
		(event) =>
			(document.querySelector('span').innerText = event.target.value)
	);

/*
	2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
	- добавить два класса: animate_animated и animate_fadeInLeftBig
	- поставить данному элементу стиль visibility в значение 'visible'.
*/

const message = document.querySelector('div.message');
document
	.querySelector('button.messageBtn')
	.addEventListener('click', (event) => {
		message.classList.add('animate_animated', 'animate_fadeInLeftBig');
		message.style.visibility = 'visible';
	});

/*
	3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено,
	форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error
	незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное
	поле, произвести проверку:
	- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
	- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const form = document.querySelector('form');

form.addEventListener('input', (event) => {
	const field = event.target;
	if (!field.value) {
		field.classList.add('error');
	} else {
		field.classList.remove('error');
	}
});

form.addEventListener('submit', (event) => {
	for (const element of event.target.elements) {
		if (!(element.tagName.toLowerCase() === 'button' || element.value)) {
			event.preventDefault();
		}
	}
});
