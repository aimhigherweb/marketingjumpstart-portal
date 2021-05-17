import { Fragment, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { parse, format } from 'date-fns';

import fetchData from '../../../../utils/ads/index';

import { CMSDataContext } from '../../fetchData';

import styles from './googleAds.module.scss';

const GoogleAds = () => {
	const { brands } = useContext(CMSDataContext);
	const { isLoading, data, error } = useQuery([
		`ads`,
		{
			id: brands[0].ad_id
		}
	], fetchData);

	console.log({ isLoading, data, error });

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>Something went wrong</p>;

	// const adData = []

	// data?.data[1].forEach((stat, i) => {
	// 	if (typeof stat === `number`) {
	// 		adData.push({
	// 			name: data.data[0][i],
	// 			value: stat
	// 		})
	// 	}
	// });

	return (
		<Fragment>
			<h2>Google Ads</h2>
			{/* <dl className={styles.stats} style={{'--stats': adData.length}}>
				{adData.map((stat) => (
					<Fragment>
						<dt>{stat.name}</dt>
						<dd>{stat.value}</dd>
					</Fragment>
				))}
			</dl> */}
		</Fragment>
	);
};

export default GoogleAds;
