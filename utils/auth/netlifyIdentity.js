/* eslint-disable no-console */
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
	APIUrl: `${process.env.NEXT_PUBLIC_PORTAL_URL}/.netlify/identity`,
	setCookie: true
});

export const login = (email, password, remember, loginSuccess) => {
	auth
		.login(email.value, password.value, remember.checked)
		.then((res) => {
			loginSuccess(res.token.access_token);
		})
		.catch((err) => console.log({ err }));
};

export const logout = (logoutSuccess) => {
	auth
		.currentUser()
		.logout()
		.then(() => { logoutSuccess(); })
		.catch((err) => console.log(err));
};

export const currentUser = () => auth.currentUser();

export const signup = ({ email, password, name }) => {
	auth
		.signup(email.value, password.value, { full_name: name.value })
		.then(() => console.log(`Confirmation email sent`))
		.catch((err) => console.log(err));
};

export const requestReset = (email) => {
	auth
		.requestPasswordRecovery(email)
		.then(() => console.log(`Recovery email sent`))
		.catch((err) => console.log(`Error sending recovery email`, err));
};

export const recoverUser = (token) => {
	auth
		.recover(token, false)
		.then(() => {
			console.log(`Logged in`);
			console.log(auth.currentUser());
		})
		.catch((err) => console.log(err));
};

export const updateUser = (details) => {
	const user = auth.currentUser();

	console.log(details);

	user
		.update(details)
		.then((res) => console.log(`Updated user`, res))
		.catch((err) => console.log(err));
};

export const confirmUser = (details) => {
	auth
		.acceptInvite(
			details.token,
			details.password,
			false
		)
		.then(() => {
			console.log(`User confirmed`);
		})
		.catch((err) => console.log(err));
};
