const { google } = require(`googleapis`);

export default async (req, res) => {
	const { folder } = req.query;

	const auth = new google.auth.GoogleAuth({
		credentials: JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CREDS),
		scopes: [`https://www.googleapis.com/auth/drive.readonly`]
	});
	const drive = google.drive({
		version: `v3`,
		auth
	});

	const files = await drive.files.list({
		pageSize: 10,
		supportsAllDrives: true,
		includeItemsFromAllDrives: true,
		fields: `*`,
		q: `'${folder}' in parents`,
	});

	res.status(200).json(files.data);
};
