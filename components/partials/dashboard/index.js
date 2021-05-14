import { Fragment, useContext } from 'react';

import GoogleAds from '../../parts/dashboard/googleAds';
import Drive from '../../parts/dashboard/drive/index.js';

import { CMSDataContext } from '../../parts/fetchData';

import styles from './dashboard.module.scss';

const Dashboard = () => {
	const { brands } = useContext(CMSDataContext);

	return (
		<div className={styles.dashboard}>
			<h1 className="sr-only">Dashboard</h1>
			<section>
				<h2>Overview</h2>
				<ul className={styles.clients}>
					{brands.map((brand) => (
						<li key={brand.brand_id}>
							<img className={styles.logo} />
							{brand.name}
						</li>
					))}
				</ul>
			</section>
			<section className={styles.section}>
				<GoogleAds />
			</section>
			<section className={styles.section}>
				<Drive />
			</section>
		</div>
	);
};

export default Dashboard;
