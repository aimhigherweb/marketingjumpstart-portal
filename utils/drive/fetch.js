const files = ({ queryKey }) => {
	const [key, { folder }] = queryKey;
	const api = [`api`, `drive`, `list`];

	let url = `/.netlify/functions/next_${api.join(`_`)}`;

	if (process.env.NEXT_PUBLIC_NODE_ENV === `dev`) {
		url = `/${api.join(`/`)}`;
	}

	return fetch(`${url}?folder=${folder}`, {
		method: `POST`,
		headers: {
			'Content-Type': `application/json`
		}
	}).then((res) => res.json()).catch((err) => console.log(err));
};

export default files;
