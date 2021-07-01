import App from './App.js';
import api from './helpers/api-wp.js';

document.addEventListener('DOMContentLoaded', App);
addEventListener('hashchange', () => {
	api.page = 1;
	App();
});
