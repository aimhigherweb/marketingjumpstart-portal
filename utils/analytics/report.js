const fetchData = ({ queryKey }) => {
	const [key, { id, start = `31daysAgo`, end = `today` }] = queryKey;

	return fetch(`/api/analytics/report?id=${id}&start=${start}&end=${end}`, {
		method: `POST`,
		headers: {
			'Content-Type': `application/json`
		}
	}).then((res) => res.json()).catch((err) => console.log(err));
};

export default fetchData;
