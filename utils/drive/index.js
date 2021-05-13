const { google } = require(`googleapis`);

const drive = () => {
	const credentials = JSON.parse(process.env.NEXT_GOOGLE_CREDS);
	const client = google.auth.getClient({
		credentials,
		scopes: [`https://www.googleapis.com/auth/drive.readonly`]
	});

	return google.drive({
		version: `v3`,
		auth: client
	});
};

export default drive;
