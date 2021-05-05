import { currentUser, recoverUser } from './netlifyIdentity';

const recoverToken = () => {
	if (window.location.hash.match(/\#recovery_token/)) {
		const params = {};
		window.location.hash.replace(/^\#/, ``).split(`&`).forEach((i) => {
			const values = i.split(`=`);

			params[values[0]] = values[1];
		});

		if (params.recovery_token) {
			recoverUser(params.recovery_token);

			if (currentUser()) {
				console.log(currentUser());
				return true;
			}
		}
	}
};

export default recoverToken;
