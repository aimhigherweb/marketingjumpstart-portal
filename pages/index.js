import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import Link from 'next/link';
import { UserContext } from './_app';

import {
	Button
} from '../components/parts/forms';
import Login from '../components/parts/user/loginForm';

import Logo from '../src/img/logo.svg';

import { login, logout } from '../utils/auth/netlifyIdentity';

import styles from '../styles/pages/landing.module.scss';

const IndexPage = () => {
	const router = useRouter();
	const { loggedIn, name, email } = useContext(UserContext);
	const loginSuccess = () => {
		router.push(`/dashboard`);
	};
	const logoutSuccess = () => {
		router.reload();
	};

	return (
		<div className={styles.landing}>
			<Logo className={styles.logo} />
			<h1>Client Portal</h1>
			{loggedIn
				? <div>
					<p>You are already logged in as {name} (<em>{email}</em>)</p>
					<Button onClick={() => logout(logoutSuccess)}>Log Out</Button>
					<Link href="/dashboard"><a>Proceed to Dashboard</a></Link>
				</div>
				: <Login
					{...{ loginSuccess }}
				/>
			}
		</div>
	);
};

export default IndexPage;
