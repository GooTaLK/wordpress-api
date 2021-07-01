import Menu from './Menu.js';
import Title from './Title.js';

export default function Header() {
	const $header = document.createElement('header');

	$header.classList.add('header');
	$header.appendChild(Title());
	$header.appendChild(Menu());

	return $header;
}
