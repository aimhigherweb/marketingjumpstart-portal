import { Fragment, useContext } from 'react';

import GoogleAds from '../../parts/dashboard/googleAds';

import styles from './dashboard.module.scss';

const Dashboard = () => (
	<div className={styles.dashboard}>
		<h1 className="sr-only">Dashboard</h1>
		<section>
			<h2>Overview</h2>
			<ul className={styles.clients}>
				<li>
					<img className={styles.logo} />
					Frost and Associates
				</li>
			</ul>
		</section>
		<section className={styles.section}>
			<GoogleAds />
		</section>
		<section className={styles.section}>
			<h2>Google Ads Campaigns</h2>
		</section>
	</div>
);

export default Dashboard;
