const container = document.querySelector('div.container');

const title = document.createElement('h1');
title.classList.add('text-center', 'mt-3', 'mb-5');
container.append(title);

fetch('http://127.0.0.1:8000')
	.then((response) => {
		if (response.ok) {
			title.innerText = 'Аналитика файловой системы проекта Django';

			const table = document.createElement('table');
			table.classList.add('table', 'text-center');
			container.append(table);

			const head = document.createElement('thead');
			table.append(head);

			const row = document.createElement('tr');
			head.append(row);

			for (let text of ['№', 'Имя', 'Размер']) {
				const cell = document.createElement('th');
				cell.scope = 'col';
				cell.innerText = text;
				row.append(cell);
			}

			const body = document.createElement('tbody');
			table.append(body);

			return response.json();
		}
		throw new Error();
	})
	.then((files) => {
		const body = document.querySelector('div.container table.table');
		let count = 1;
		for (const [name, size] of Object.entries(files)) {
			const row = document.createElement('tr');
			body.append(row);

			const numberCell = document.createElement('th');
			numberCell.innerText = count.toString();
			numberCell.scope = 'row';
			row.append(numberCell);

			const nameCell = document.createElement('td');
			nameCell.innerText = name;
			row.append(nameCell);

			const sizeCell = document.createElement('td');
			sizeCell.innerText = `${size} Б`;
			row.append(sizeCell);

			count++;
		}
	})
	.catch(
		() =>
			(title.innerText = 'Не удалось получить данные о файловой системе')
	);
