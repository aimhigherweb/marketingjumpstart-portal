import { useContext } from 'react';
import { UserContext } from '../../../pages/_app';

import Logo from '../../../src/img/logo.svg';
import Nav from '../../parts/sideNav';

import styles from './sidebar.module.scss';

const Sidebar = ({ className }) => {
	const { loggedIn, roles } = useContext(UserContext);
	const authorised = !!(loggedIn && roles.length);

	return (
		<aside className={`${className} ${styles.sidebar}`}>
			<a href="https://marketingjumpstart.com.au" target="_blank">
				<Logo className={styles.logo} />
				<span className="sr-only">Marketing Jumpstart</span>
			</a>
			{authorised
				&& <Nav admin={roles.includes(`admin`)} />
			}
		</aside>
	);
};

export default Sidebar;
