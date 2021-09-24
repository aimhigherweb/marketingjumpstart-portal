const fetchData = ({ queryKey }) => {
	const [key, { id, dateRanges, reports }] = queryKey;
	const api = [`api`, `analytics`, `report`];

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
			reports
		})
	}).then((res) => res.json()).catch((err) => console.log(err));
};

export default fetchData;
