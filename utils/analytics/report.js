const fetchData = ({ queryKey }) => {
	const [key, { id, dateRanges, reports }] = queryKey;

	return fetch(`/.netlify/functions/next_api_ads_report`, {
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
