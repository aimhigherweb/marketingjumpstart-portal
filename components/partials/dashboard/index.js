import { Fragment, useContext } from 'react';

import GoogleAds from '../../parts/dashboard/googleAds';
import Approvals from '../../parts/dashboard/drive/approval';
import Analytics from '../../parts/dashboard/analytics';

import { CMSDataContext } from '../../parts/fetchData';

import styles from './dashboard.module.scss';

const Dashboard = () => {
	const { brands, socialMedias } = useContext(CMSDataContext);

	return (
		<div className={styles.dashboard}>
			<h1 className="sr-only">Dashboard</h1>
			<section>
				<h2>Overview</h2>
				<ul className={styles.clients}>
					{brands.map((brand) => (
						<li key={brand.brand_id}>
							<img className={styles.logo} src={brand.logo.url} />
							{brand.name}
						</li>
					))}
				</ul>
			</section>
			{brands.map((brand) => {
				if (brand.ad_id) {
					return (
						<section className={styles.section}>
							<h2>Google Ads</h2>
							<p>Coming Soon!</p>
							{/* <GoogleAds /> */}
						</section>
					);
				}
			})}
			{brands.map((brand) => {
				if (brand.google_analytics) {
					return (
						<section className={styles.section}>
							<h2>Analytics</h2>
							{/* <Analytics /> */}
						</section>
					);
				}
			})}
			{socialMedias.map((item) => (
				<section className={styles.section}>
					<h2>{item.title}</h2>
					<Approvals key={JSON.stringify(item)} {...item} />
				</section>
			))}
			{(!socialMedias || !socialMedias.length) && (
				<section className={styles.section}>
					<p>Looks like you don't have anything to approve.</p>
				</section>
			)}
		</div>
	);
};

export default Dashboard;
