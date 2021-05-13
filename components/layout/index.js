import { Fragment } from 'react';
import Head from 'next/head';

import Header from '../partials/header';
import Login from '../parts/user/login';
import Sidebar from '../partials/sidebar';

import styles from './layout.module.scss';

// eslint-disable-next-line one-var
const Layout = ({
	children, meta
}) => (
	<div className={styles.layout}>
		<Header>
			<Login />
		</Header>
		<main className={styles.main}>
			<Sidebar />
			{children}
		</main>

		<Head>
			<script src="https://apis.google.com/js/client:platform.js"></script>
			<script src="https://apis.google.com/js/api.js"></script>
		</Head>
	</div>
);

export default Layout;
