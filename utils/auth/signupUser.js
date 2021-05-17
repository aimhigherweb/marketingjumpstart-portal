import { confirmUser, currentUser } from './netlifyIdentity';

const newUser = () => {
	if (window.location.hash.match(/\#invite_token/)) {
		const params = {};
		window.location.hash.replace(/^\#/, ``).split(`&`).forEach((i) => {
			const values = i.split(`=`);

			params[values[0]] = values[1];
		});

		if (params.invite_token) {
			confirmUser(params.invite_token);

			if (currentUser()) {
				console.log(currentUser());
				return true;
			}
		}
	}
};

export default newUser;
