export default function hideTopButton() {
	const $buttonTop = document.querySelector('.button-top');

	document.addEventListener('scroll', (e) => {
		if (!e.target === $buttonTop) return false;

		document.documentElement.scrollTop <= 500
			? $buttonTop.classList.remove('visible')
			: $buttonTop.classList.add('visible');
	});
}
