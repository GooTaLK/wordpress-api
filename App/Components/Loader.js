export default function Loader() {
	const $img = document.createElement('img');

	$img.src = './App/assets/bars.svg';
	$img.alt = 'cargando...';
	$img.classList.add('loader');

	return $img;
}
