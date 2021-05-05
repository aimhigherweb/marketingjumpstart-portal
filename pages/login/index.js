import { useContext } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import Layout from '../../components/layout';

import {
	Form, Input, Label, Button, Checkbox, Legend
} from '../../components/parts/forms';
import Login from '../../components/parts/user/loginForm';

import { login, logout } from '../../utils/auth/netlifyIdentity';

import styles from './login.module.scss';

const LoginPage = () => {
	const router = useRouter();
	const { name, loggedIn, email } = useContext(UserContext);
	const loginSuccess = () => {
		router.push(`/dashboard`);
	};
	const logoutSuccess = () => {
		router.reload();
	};

	return (
		<Layout>
			{loggedIn
				? <div className={styles.user}>
					<p>You are already logged in as {name} (<em>{email}</em>)</p>
					<Button onClick={() => logout(logoutSuccess)}>Log Out</Button>
				</div>
				: <Login
					className={styles.form}
					{...{ loginSuccess }}
				/>
			}
		</Layout>
	);
};

export default LoginPage;
