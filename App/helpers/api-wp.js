const NAME = 'css-tricks';
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const WP_API = `${SITE}/wp/v2`;
const PER_PAGE = 8;
const POST = `${WP_API}/posts`;
const POSTS = `${WP_API}/posts?_embed&per_page=${PER_PAGE}`;
const SEARCH = `${WP_API}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
	NAME,
	DOMAIN,
	SITE,
	WP_API,
	POST,
	POSTS,
	SEARCH,
	page,
};
