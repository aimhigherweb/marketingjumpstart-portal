const fetchAPI = ({ params, path, count }) => {
	const url = new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${path}${count ? `/${count}` : ``}`);

	url.search = new URLSearchParams(params);

	return fetch(
		url,
		{
			method: `GET`,
			headers: {
				'Content-Type': `application/json`
			}
		}
	).then((res) => res.json()).catch((err) => console.log(err));
};

export default fetchAPI;
