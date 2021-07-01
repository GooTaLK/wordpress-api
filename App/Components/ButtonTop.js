export default function ButtonTop() {
	const $button = document.createElement('button');

	$button.classList.add('button-top');
	$button.textContent = '⇧';
	return $button;
}
