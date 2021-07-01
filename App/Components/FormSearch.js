export default function FormSearch() {
	const $form = document.createElement('form');
	const $input = document.createElement('input');
	const $p = document.createElement('p');

	$form.classList.add('form-search');
	$input.name = 'search';
	$input.type = 'search';
	$input.placeholder = 'Buscar...';
	$p.classList.add('form-search__tip');
	$p.textContent = 'Presiona ENTER para buscar.';
	$form.append($input, $p);

	return $form;
}
