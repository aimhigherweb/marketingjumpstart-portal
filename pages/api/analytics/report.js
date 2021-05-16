const { google } = require(`googleapis`);

export default async (req, res) => {
	const { id, reports } = req.body;
	let { dateRanges } = req.body;

	if (!dateRanges) {
		dateRanges = [
			{
				start: `31daysAgo`,
				end: `today`
			}
		];
	}

	const reportRequests = reports.map((report) => (
		{
			viewId: id,
			dateRanges,
			...report
		}
	));

	const auth = new google.auth.GoogleAuth({
		credentials: JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CREDS),
		scopes: [
			`https://www.googleapis.com/auth/analytics.readonly`
		]
	});
	const analytics = google.analyticsreporting({
		version: `v4`,
		auth
	});

	const reportData = await analytics.reports.batchGet({
		requestBody: {
			reportRequests

		}
	});

	res.status(200).json(reportData?.data?.reports);
};
