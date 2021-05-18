import { useRouter } from 'next/router';
import {
	useContext, useEffect, useState, Fragment
} from 'react';

import Link from 'next/link';
import { UserContext } from './_app';

import {
	Form, Password, Button, Hint
} from '../components/parts/forms';
import Login from '../components/parts/user/loginForm';

import Logo from '../src/img/logo.svg';

import { logout, confirmUser } from '../utils/auth/netlifyIdentity';

import styles from '../styles/pages/landing.module.scss';

const IndexPage = () => {
	const router = useRouter();
	const { loggedIn, name, email } = useContext(UserContext);
	const [invited, setInvited] = useState(false);
	const [token, setToken] = useState(false);
	const [submitted, setSubmit] = useState(false);
	const loginSuccess = () => {
		router.push(`/dashboard`);
	};
	const logoutSuccess = () => {
		router.reload();
	};

	const submitRequest = (e) => {
		e.preventDefault();

		const form = e.target;
		const { password } = form.elements;

		confirmUser({
			token,
			password: password.value
		});

		setSubmit(!submitted);
	};

	useEffect(() => {
		if (typeof window !== `undefined`) {
			// eslint-disable-next-line no-undef
			if (window.location.hash.match(/\#invite_token/)) {
				const params = {};
				// eslint-disable-next-line no-undef
				window.location.hash.replace(/^\#/, ``).split(`&`).forEach((i) => {
					const values = i.split(`=`);

					// eslint-disable-next-line prefer-destructuring
					params[values[0]] = values[1];
				});

				if (params.invite_token) {
					setInvited(true);
					setToken(params.invite_token);
				}
			}
		}
	}, [router]);

	return (
		<div className={styles.landing}>
			<Logo className={styles.logo} />
			<h1>Client Portal</h1>
			{(invited && !loggedIn)
			&& <Form onSubmit={(e) => submitRequest(e)}>
				{!submitted
					? <Fragment>
						<Password
							autoComplete="on"
							validate={true}
						>
						Set Password
							<Hint>Must contain
								<ul className="requirements">
									<li>At least 8 characters</li>
									<li>At least 1 uppercase letter</li>
									<li>At least 1 number</li>
								</ul>
							</Hint>
						</Password>
						<Button type="submit">Set Password</Button>
					</Fragment>
					: <p>Thanks for signing up, if you're not redirect in the next 5 seconds, <a href="/login">click here to login</a>.</p>
				}
			</Form>
			}
			{loggedIn
				&& <div>
					<p>You are already logged in as {name} (<em>{email}</em>)</p>
					<Button className={styles.button} onClick={() => logout(logoutSuccess)}>Log Out</Button>
					<Link href="/dashboard"><a className={styles.button}>Proceed to Dashboard</a></Link>
				</div>
			}
			{(!loggedIn && !invited)
				&& <Login
					{...{ loginSuccess }}
				/>
			}
		</div>
	);
};

export default IndexPage;
