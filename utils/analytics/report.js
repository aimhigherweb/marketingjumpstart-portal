const fetchData = ({ queryKey }) => {
	const [key, { id, dateRanges, reports }] = queryKey;

	return fetch(`/api/analytics/report`, {
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
