'use strict';

/*
    1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо
    использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/
console.log('Задача 1');
for (const item of document.querySelectorAll(
	'div.dropdown div.menu.dropdown-menu a.dropdown-item'
)) {
	item.classList.add('super-dropdown');
	console.log(item);
}

/*
    2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо
    добавить, если такого класса у элемента не было.
*/
console.log('Задача 2');
const button = document.querySelector('div.dropdown button.btn');
if (button.classList.contains('btn-secondary')) {
	button.classList.remove('btn-secondary');
} else {
	button.classList.add('btn-secondary');
}
console.log(button);

/*
    3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/
console.log('Задача 3');
const menu = document.querySelector('div.dropdown div.menu');
menu.classList.remove('dropdown-menu');
console.log(menu);

/*
    4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
	<a href="#">link</a>`
*/
console.log('Задача 4');
const dropdown = document.querySelector('div.dropdown');
dropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');
console.log(dropdown.nextElementSibling);

/*
    5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
console.log('Задача 5');
document.querySelector('div.dropdown button#dropdownMenuButton').id =
	'superDropdown';
console.log(button);

/*
    6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный
    "dropdownMenuButton" используя dataset.
*/
console.log('Задача 6');
document.querySelector(
	'div.dropdown div[aria-labelledby="dropdownMenuButton"]'
).dataset.dd = '3';
console.log(menu);

/*
    7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
console.log('Задача 7');
document
	.querySelector('div.dropdown button.dropdown-toggle')
	.removeAttribute('type');
console.log(button);
