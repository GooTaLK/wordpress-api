export default function postFetching() {
	document.addEventListener('click', (e) => {
		if (e.target.matches('.local-link')) {
			sessionStorage.setItem('id-post', `${e.target.dataset.id}`);
		}
	});
}
