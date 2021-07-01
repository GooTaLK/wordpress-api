import ajax from '../helpers/ajax.js';
import api from '../helpers/api-wp.js';
import SearchCard from './SearchCard.js';

export default async function Seacrh() {
	const $searchDiv = document.createElement('div');

	$searchDiv.classList = `search-post page-${api.page}`;

	await ajax({
		url: `${api.SEARCH}${sessionStorage.getItem('search')}&page=${api.page}`,
		cbSuccess: (data) => {
			console.log(data);

			data.forEach((el) => {
				$searchDiv.appendChild(
					SearchCard({
						title: el.title,
						date: el._embedded.self[0].date,
						excerpt: el._embedded.self[0].excerpt.rendered,
						localLink: {
							href: `#${el._embedded.self[0].slug}`,
							id: el.id,
						},
						externalLink: el.url,
					})
				);
			});
		},
	});

	return $searchDiv;
}
