import Header from './Components/Header.js';
import Loader from './Components/Loader.js';
import Container from './Components/container.js';
import scrollTop from './helpers/scroll-top.js';
import ButtonTop from './Components/ButtonTop.js';
import hideTopButton from './Components/ButtonTopHide.js';
import Router from './Components/Router.js';
import postFetching from './helpers/post-fetching.js';

const $root = document.getElementById('root');

export default function App() {
	$root.innerHTML = '';
	$root.append(Header(), Container(), Loader(), ButtonTop());

	scrollTop();
	hideTopButton();
	postFetching();

	Router();
}
