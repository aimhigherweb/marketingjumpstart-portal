import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { UserContext } from './_app';

const IndexPage = () => {
	const router = useRouter();
	const { loggedIn } = useContext(UserContext);

	// useEffect(() => {
	// 	if (loggedIn) {
	// 		router.push(`/dashboard`);
	// 	}
	// 	router.push(`/login`);
	// }, [loggedIn]);

	return (
		<dispatchEvent>
			<h1>Client Portal</h1>
			<a href="/login">Login</a>
		</dispatchEvent>
	);
};

export default IndexPage;
