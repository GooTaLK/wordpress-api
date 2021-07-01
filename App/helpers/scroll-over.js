export default function scrollOver({ component, params = null }, api) {
	const scr = async () => {
		const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

		if (scrollHeight <= scrollTop + clientHeight) {
			const $loader = document.querySelector('.loader');

			if (!$loader.classList.contains('visible'))
				$loader.classList.add('visible');

			api.page++;

			const $component = await component(params);

			document.querySelector('.container').appendChild($component);
			$loader.classList.remove('visible');

			// const $p = document.createElement('p');
			// $p.textContent = 'hola';
			// document.getElementById('root').appendChild($p);
			// console.log('toy aqi');
		}
	};

	addEventListener('scroll', scr);

	addEventListener('hashchange', () => removeEventListener('scroll', scr));
}
