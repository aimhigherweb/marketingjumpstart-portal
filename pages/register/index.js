import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import SignupForm from '../../components/parts/user/signup';

import Layout from '../../components/layout';

import styles from './register.module.scss';

const Signup = () => {
	const { name, loggedIn } = useContext(UserContext);
	const router = useRouter();

	useEffect(() => {
		if (loggedIn) {
			// router.push(`/dashboard`);
			console.log(`Logged in, redirecting to Dashboard`);
		}
	}, [loggedIn]);

	return (
		<Layout>
			<SignupForm className={styles.form} />
		</Layout>
	);
};

export default Signup;
