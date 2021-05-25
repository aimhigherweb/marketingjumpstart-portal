const fetchData = ({ queryKey }) => {
	const [key, { id, dateRanges, reports }] = queryKey;

	// /.netlify/functions/next_api_analytics_report
	// /api/analytics/report

	return fetch(`/.netlify/functions/next_api_analytics_report`, {
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
