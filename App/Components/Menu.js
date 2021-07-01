export default function Menu() {
	const $nav = document.createElement('nav');

	$nav.innerHTML = `
        <ul>
            <li>
                <a class="header__link" href="#/search">Busqueda</a>
            </li>

            <li>
                <a class="header__link" href="#/posts">Publicaciones</a>
            </li>
            
            <li>
                <a class="header__link" href="#/contact">Contacto</a>
            </li>
        </ul>
    `;

	return $nav;
}
