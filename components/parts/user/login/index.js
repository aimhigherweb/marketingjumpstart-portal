import { Fragment, useContext, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Button from "../../forms/button";
import Icon from "../../icon";

import { UserContext } from '../../../../pages/_app';
import { login, logout } from '../../../../utils/auth/netlifyIdentity';

import styles from './login.module.scss';

const Login = () => {
	const router = useRouter();
	const { name, loggedIn, email } = useContext(UserContext);
	const logoutSuccess = () => {
		router.push(`/login`);
	};
	const [menuOpen, toggleMenu] = useState(false);

	if (!loggedIn) {
		return (
			<Link
				className={styles.button}
				href="/login"
			>
				<a>Login</a>
			</Link>
		);
	}

	return (
		<Fragment>
			<Button
				className={styles.user}
				onClick={() => toggleMenu(!menuOpen)}
			>
				Hi {name}
				<Icon icon="chevron" />
			</Button>
			{menuOpen
				&& <nav className={styles.nav}>
					<ul>
						<li>
							Logged in as {name} <em>({email})</em>
						</li>
						<li>
							<Link href="/update">
								<a>Update Details</a>
							</Link>
						</li>
						<li>
							<Button
								className={styles.button}
								onClick={() => logout(logoutSuccess)}
							>
								Log out
							</Button>
						</li>
					</ul>
				</nav>
			}

		</Fragment>
	);
};

export default Login;
