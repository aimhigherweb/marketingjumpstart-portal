const { google } = require(`googleapis`);

export default async (req, res) => {
	const { id, start = `31daysAgo`, end = `today` } = req.query;

	const auth = new google.auth.GoogleAuth({
		credentials: JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CREDS),
		scopes: [
			`https://www.googleapis.com/auth/analytics.readonly`
		]
	});
	const analytics = google.analyticsdata({
		version: `v1beta`,
		auth
	});

	const reports = await analytics.properties.runReport({
		property: `properties/${id}`,
		requestBody: {
			dateRanges: [
				{
					startDate: start,
					endDate: end,
				},
			],
			dimensions: [
				{
					name: `date`
				}
			],
			metrics: [
				{
					name: `activeUsers`
				}
			]

		}
	});

	res.status(200).json(reports.data);
};
