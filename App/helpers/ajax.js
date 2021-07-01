export default async function ajax({ url, cbSuccess }) {
	await fetch(url)
		.then((res) => (res.ok ? res.json() : Promise.reject(res)))
		.then((json) => cbSuccess(json))
		.catch((err) => {
			document.getElementById('root').innerHTML = `
            <div class= "error">
                <h1>${err.status || '400'}</h1>
                <p>${err.stattusText || 'Error en la petición'}</p>
            </div>
            `;

			console.error(err);
		});
}
