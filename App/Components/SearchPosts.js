import Search from './Search.js';
import api from '../helpers/api-wp.js';

export default function SearchPost() {
	const $searchInput = document.querySelector('.form-search');

	document.querySelector('.loader').classList.remove('visible');
	$searchInput.search.focus();

	$searchInput.addEventListener('submit', (e) => e.preventDefault());

	$searchInput.addEventListener('keyup', async (e) => {
		if (e.key === 'Enter') {
			document.querySelector('.loader').classList.add('visible');
			sessionStorage.setItem('search', e.target.value);

			api.page = 1;
			if (document.querySelectorAll('.search-post'))
				document.querySelectorAll('.search-post').forEach((el) => el.remove());

			const $Search = await Search();

			document.querySelector('.container').appendChild($Search);

			document.querySelector('.loader').classList.remove('visible');
		}
	});
}
