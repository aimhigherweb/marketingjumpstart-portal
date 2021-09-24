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

	// console.log({ data, isLoading, error });

	if (isLoading) return <p>Loading...</p>;

	if (error || !data || data === {}) return <p>Something went wrong</p>;

	return (
		<Fragment>
			<dl className={styles.stats} style={{ '--stats': Object.keys(data) .length }}>

				{data.clicks
				&& <Fragment>
					<dt>Clicks</dt>
					<dd>{data.clicks}</dd>
				</Fragment>
				}
				{data.avg_cpc
				&& <Fragment>
					<dt>Avg CPC</dt>
					<dd>
						<span className={styles.type}>$</span>
						{data.avg_cpc.toFixed(2)}
					</dd>
				</Fragment>
				}

				{data.impressions
				&& <Fragment>
					<dt>Impressions</dt>
					<dd>{data.impressions}</dd>
				</Fragment>
				}
				{data.avg_cpm
					&& <Fragment>
						<dt>Avg CPM</dt>
						<dd>
							<span className={styles.type}>$</span>
							{data.avg_cpm.toFixed(2)}
						</dd>
					</Fragment>
				}
			</dl>
		</Fragment>
	);
};

export default GoogleAds;
