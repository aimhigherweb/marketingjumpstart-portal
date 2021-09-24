const fetchData = ({ queryKey }) => {
	const [key, { id, dateRanges }] = queryKey;
	const api = [`api`, `ads`, `general`];

	let url = `/.netlify/functions/next_${api.join(`_`)}`;

	if (process.env.NEXT_PUBLIC_NODE_ENV === `dev`) {
		url = `/${api.join(`/`)}`;
	}

	return fetch(url, {
		method: `POST`,
		headers: {
			'Content-Type': `application/json`
		},
		body: JSON.stringify({
			id,
			dateRanges,
		})
	}).then((res) => res.json()).catch((err) => console.log(err));
};

export default fetchData;
