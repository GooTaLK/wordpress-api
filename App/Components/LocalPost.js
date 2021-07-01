import ajax from '../helpers/ajax.js';
import api from '../helpers/api-wp.js';

export default function LocalPost() {
	const $localPost = document.createElement('div');

	$localPost.classList.add('local-post');

	ajax({
		url: `${api.POST}/${sessionStorage.getItem('id-post')}`,
		cbSuccess: (data) => {
			$localPost.innerHTML = data.content.rendered;
		},
	});

	return $localPost;
}
