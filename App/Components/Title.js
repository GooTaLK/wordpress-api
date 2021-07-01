import api from '../helpers/api-wp.js';

export default function Title() {
	const $h1 = document.createElement('h1');

	$h1.classList.add('header__title');
	$h1.innerHTML = `
		<a href="${api.DOMAIN}" target="_blank">${api.NAME}</a>
	`;

	return $h1;
}
