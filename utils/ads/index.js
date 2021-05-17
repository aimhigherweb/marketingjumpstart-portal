// const { URLSearchParams } = require('url');

const fetchData = ({ queryKey }) => {
	const [key, { id }] = queryKey;
	const url = new URL(`https://api.supermetrics.com/enterprise/v2/query/data/json`);

	url.search = new URLSearchParams({
		json: JSON.stringify({
			ds_id: `AW`,
			ds_accounts: [
				id
			],
			ds_user: process.env.NEXT_PUBLIC_GOOGLE_AD_EMAIL,
			date_range_type: `last_31_days_inc`,
			fields: [
				`Campaignname`,
				`Impressions`,
				`Clicks`,
				`CPC`
			],
			max_rows: 1000,
		})
	});

	return fetch(url, {
		method: `GET`,
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPERMETRICS_API}`
		},
	}).then((res) => res.json());
};

export default fetchData;
