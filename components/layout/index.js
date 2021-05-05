import { Fragment } from 'react';
import Head from 'next/head';

import Header from '../partials/header';
import Login from '../parts/user/login';

import styles from './layout.module.scss';

// eslint-disable-next-line one-var
const Layout = ({
	children, meta
}) => (
	<Fragment>
		<Header>
			<Login />
		</Header>
		<main className={styles.main}>
			{children}
		</main>

		<Head>
			<script src="https://apis.google.com/js/client:platform.js"></script>
		</Head>
	</Fragment>
);

export default Layout;
