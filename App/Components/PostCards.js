export default function PostCards({ imgSrc, name, localLink, externalLink }) {
	const $post = document.createElement('figure');
	const $postName = document.createElement('figcaption');
	const $postImg = document.createElement('img');
	const $postLinks = document.createElement('div');
	const $postLocal = document.createElement('a');
	const $postOrigen = document.createElement('a');

	$post.classList.add('post');
	$postName.classList.add('post__name');
	$postImg.classList.add('post__img');
	$postLinks.classList.add('post__links');
	$postLocal.classList.add('post__link');
	$postLocal.classList.add('local-link');
	$postOrigen.classList.add('post__link');

	$postImg.src = imgSrc;
	$postImg.alt = name;
	$postName.textContent = name;
	$postLocal.href = localLink.href;
	$postLocal.dataset.id = localLink.id;
	$postLocal.textContent = 'Ver más...';
	$postOrigen.href = externalLink;
	$postOrigen.target = '_blank';
	$postOrigen.textContent = 'Ver publicación original';

	$postLinks.append($postLocal, $postOrigen);
	$post.append($postImg, $postName, $postLinks);

	return $post;
}
