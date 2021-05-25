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

	if (error || !data) return <p>Something went wrong</p>;

	return (
		<Fragment>
			<dl className={styles.stats} style={{ '--stats': 4 }}>
				<dt>Clicks</dt>
				<dd>{data.clicks}</dd>
				<dt>Avg CPC</dt>
				<dd>
					<span className={styles.type}>$</span>
					{data.avg_cpc.toFixed(2)}
				</dd>
				<dt>Impressions</dt>
				<dd>{data.impressions}</dd>
				<dt>Avg CPM</dt>
				<dd>
					<span className={styles.type}>$</span>
					{data.avg_cpm.toFixed(2)}
				</dd>
			</dl>
		</Fragment>
	);
};

export default GoogleAds;
