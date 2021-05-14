const files = ({ queryKey }) => {
	const [key, { folder }] = queryKey;

	return fetch(`/api/drive/list?folder=${folder}`, {
		method: `POST`,
		headers: {
			'Content-Type': `application/json`
		}
	}).then((res) => res.json()).catch((err) => console.log(err));
};

export default files;
