const fetchData = ({ queryKey }) => {
	const [key, { id, dateRanges }] = queryKey;

	return fetch(`/.netlify/functions/next_api_ads_general`, {
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
