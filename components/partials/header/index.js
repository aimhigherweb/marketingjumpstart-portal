import Link from 'next/link';

import styles from './header.module.scss';

const Header = ({ children }) => (
	<header className={styles.header}>
		<div className={styles.user}>
			{children}
		</div>
	</header>
);

export default Header;
