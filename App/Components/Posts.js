import ajax from '../helpers/ajax.js';
import PostCards from './PostCards.js';

export default async function Posts(api) {
	const $posts = document.createElement('div');

	$posts.classList.add('posts-container');
	$posts.classList.add(`page-${api.page}`);

	await ajax({
		url: `${api.POSTS}&page=${api.page}`,
		cbSuccess: (data) => {
			console.log(data);

			data.forEach((el) => {
				$posts.appendChild(
					PostCards(
						{
							imgSrc: el._embedded['wp:featuredmedia']
								? el._embedded['wp:featuredmedia'][0].source_url
								: '',
							name: el.title.rendered,
							localLink: {
								href: `#${el.slug}`,
								id: el.id,
							},
							externalLink: el.link,
						},
						api
					)
				);
			});
		},
	});

	return $posts;
}
