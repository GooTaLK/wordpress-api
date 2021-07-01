import api from '../helpers/api-wp.js';
import FormSearch from './FormSearch.js';
import Posts from './Posts.js';
import scrollOver from '../helpers/scroll-over.js';
import SearchPosts from './SearchPosts.js';
import Seacrh from './Search.js';
import LocalPost from './LocalPost.js';

export default async function Router() {
	const $container = document.querySelector('.container');
	const $headerLink = document.querySelectorAll('.header__link');

	let hash = location.hash;

	if (!hash || hash === '#/posts') {
		$headerLink[1].classList.add('current');

		const $Posts = await Posts(api);

		$container.appendChild($Posts);
		scrollOver({ component: Posts, params: api }, api);
	} else if (hash === '#/search') {
		$headerLink[0].classList.add('current');
		$container.appendChild(FormSearch());
		SearchPosts();
		scrollOver({ component: Seacrh }, api);
	} else if (hash === '#/contact') {
		$headerLink[2].classList.add('current');
	} else {
		$container.appendChild(LocalPost());
	}
}
