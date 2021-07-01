export default function scrollTop() {
	document.addEventListener('click', (e) => {
		if (!e.target.matches('.button-top')) return false;

		scrollTo({ behavior: 'smooth', top: 0 });
	});
}
