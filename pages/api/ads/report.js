const { JWT } = require(`google-auth-library`);
const fetch = require(`node-fetch`);

const creds = JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CREDS);

export default async (req, response) => {
	const { customerId } = req.query;
	const client = new JWT({
		email: creds.client_email,
		key: creds.private_key,
		scopes: `https://www.googleapis.com/auth/adwords`,
		subject: process.env.NEXT_PUBLIC_GOOGLE_AD_EMAIL,
		aud: `https://oauth2.googleapis.com/token`
	});

	const auth = await client.getAccessToken();

	console.log(auth);

	const url = `https://googleads.googleapis.com/v7/customers/${customerId}`;

	const data = await fetch(url,
		{
			method: `GET`,
			headers: {
				"developer-token": process.env.NEXT_PUBLIC_GOOGLE_ADS_API_DEV_TOKEN,
				"login-customer-id": process.env.NEXT_PUBLIC_GOOGLE_AD_MANAGER_ID,
				"Content-Type": `application/json`,
				Authorization: `Bearer ${auth.token}`
			},
		}).then((res) => res.json()).catch((err) => console.log(err));

	console.log(data);

	response.status(200).json(data);
};
