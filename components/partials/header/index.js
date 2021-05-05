import Link from 'next/link';

import styles from './header.module.scss';

const Header = ({ children }) => (
	<header className={styles.header}>
		<a href="https://marketingjumpstart.com.au" target="_blank">
			{/* <Logo className={styles.logo} /> */}
		</a>
		<p className={styles.title}>
			<Link href="/">
				<a>Client Portal</a>
			</Link>
		</p>
		<div className={styles.user}>
			{children}
		</div>
	</header>
);

export default Header;
