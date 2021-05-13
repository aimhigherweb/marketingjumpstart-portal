const { google } = require(`googleapis`);

const drive = () => {
	const auth = new google.auth.GoogleAuth({
		keyFile: `/marketingjumpstart.key.json`,
		scopes: [`https://www.googleapis.com/auth/cloud-platform`]
	});

	console.log(google.drive({
		version: `v3`,
		auth
	}));

	return {};
};

exports.handler = (event, context) => {
	context.log(event);
	context.log(context);

	return {
		statusCode: 200,
		body: JSON.stringify(drive)
	};
};
