const products = `[
	{
		"name": "ELLERY X M'O CAPSULE",
		"description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		"price": {
			"amount": "52.00",
			"currency": "$"
		},
		"image": {
			"source": "images/products_man_1.jpg",
			"alternativeText": "Man"
		}
	},
	{
		"name": "ELLERY X M'O CAPSULE",
		"description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		"price": {
			"amount": "52.00",
			"currency": "$"
		},
		"image": {
			"source": "images/products_woman_1.jpg",
			"alternativeText": "Woman"
		}
	},
	{
		"name": "ELLERY X M'O CAPSULE",
		"description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		"price": {
			"amount": "52.00",
			"currency": "$"
		},
		"image": {
			"source": "images/products_man_2.jpg",
			"alternativeText": "Man"
		}
	},
	{
		"name": "ELLERY X M'O CAPSULE",
		"description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		"price": {
			"amount": "52.00",
			"currency": "$"
		},
		"image": {
			"source": "images/products_man_3.jpg",
			"alternativeText": "Man"
		}
	},
	{
		"name": "ELLERY X M'O CAPSULE",
		"description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		"price": {
			"amount": "52.00",
			"currency": "$"
		},
		"image": {
			"source": "images/products_woman_2.jpg",
			"alternativeText": "Woman"
		}
	},
	{
		"name": "ELLERY X M'O CAPSULE",
		"description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
		"price": {
			"amount": "52.00",
			"currency": "$"
		},
		"image": {
			"source": "images/products_woman_3.jpg",
			"alternativeText": "Woman"
		}
	}
]`;

for (let product of JSON.parse(products)) {
	const template = document.querySelector('#product').content.cloneNode(true);

	template.querySelector('.text__title').innerHTML = product.name;
	template.querySelector('.text__description').innerHTML =
		product.description;
	template.querySelector('.text__price').innerHTML =
		`${product.price.currency}${product.price.amount}`;
	const image = template.querySelector('.illustration__image');
	image.src = product.image.source;
	image.alt = product.image.alternativeText;

	document.querySelector('.products__cards').append(template);
}
