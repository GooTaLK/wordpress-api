export default function SearchCard({
	title,
	date,
	excerpt,
	localLink,
	externalLink,
}) {
	const $card = document.createElement('figure');

	$card.classList.add('search-card');
	$card.innerHTML = `
    <p class="search__title">${title.toUpperCase()}</p>
	<p class="search__date">[ ${new Date(date).toLocaleString()} ]</p>
    <p class="search__description">${excerpt}</p>
    <div class="search__links">
        <a href="${localLink.href}" class="search__link local-link" data-id="${
		localLink.id
	}">Ver más...</a>
        <a href="${externalLink}" class="search__link" target="_blank">Ver publicación original</a>
    </div>
    `;

	return $card;
}
