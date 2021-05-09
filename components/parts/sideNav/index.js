import Link from 'next/link';

import Icon from "../icon";

import styles from './sideNav.module.scss';

const Nav = ({ items = [] }) => (
	<nav>
		<ul>
			<li>
				<Link href="/dashboard">
					<a className={styles.link}>
						<Icon icon="dashboard" />
						Dashboard
					</a>
				</Link>
			</li>
			{items.map((item) => (
				<li key={item.url}>
					<Link href={item.url}><a>{item.label}</a></Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Nav;
