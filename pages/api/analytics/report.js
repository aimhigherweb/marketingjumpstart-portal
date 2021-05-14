const { google } = require(`googleapis`);

export default async (req, res) => {
	const { id, start = `31daysAgo`, end = `today` } = req.query;

	const auth = new google.auth.GoogleAuth({
		credentials: JSON.parse(process.env.NEXT_GOOGLE_CREDS),
		scopes: [
			`https://www.googleapis.com/auth/analytics.readonly`
		]
	});
	const analytics = google.analyticsreporting({
		version: `v4`,
		auth
	});

	const reports = await analytics.reports.batchGet({
		requestBody: {
			reportRequests: [
				{
					viewId: id,
					dateRanges: [
						{
							startDate: start,
							endDate: end,
						},
					],
					dimensions: [
						{
							name: `ga:date`,
						},
					],
				}
			]

		}
	});

	res.status(200).json(reports?.data?.reports);
};
