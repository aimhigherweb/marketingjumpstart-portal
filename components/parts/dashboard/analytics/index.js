import { Fragment, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { parse, format } from 'date-fns';

import fetchData from '../../../../utils/analytics/report';

import { CMSDataContext } from '../../fetchData';

import styles from './analytics.module.scss';

const Analytics = () => {
	const { brands } = useContext(CMSDataContext);
	const { isLoading, data, error } = useQuery([
		`analytics`,
		{
			id: brands[0].google_analytics,
			dateRanges: [
				{
					startDate: `31daysAgo`,
					endDate: `today`,
				},
				{
					startDate: `2021-03-14`,
					endDate: `2021-04-13`,
				},
			],
			reports: [
				{
					dimensions: [
						{
							name: `ga:date`,
						},
					],
				},
				{
					metrics: [
						{
							expression: `ga:users`,
						},
					],
				},
				{
					metrics: [
						{
							expression: `ga:sessions`,
						},
					],
				},
				{
					metrics: [
						{
							expression: `ga:pageviews`,
						},
					],
				},
				{
					metrics: [
						{
							expression: `ga:bounceRate`,
						},
					],
				},
			]
		}
	], fetchData);

	if (isLoading) return <p>Loading...</p>;

	if (error || !data) return <p>Something went wrong</p>;

	const headers = {
		'ga:sessions': `Sessions`,
		'ga:visits': `Visits`,
		'ga:users': `Users`,
		'ga:pageviews': `PageViews`,
		'ga:bounceRate': `BounceRate`
	};

	const stats = data.filter((item) => item?.data?.totals);

	return (
		<Fragment>
			<h2>Analytics</h2>
			<dl className={styles.stats} style={{ '--stats': stats.length }}>
				{stats.map((item) => {
					const value = item?.data?.totals[0].values[0];
					const label = headers[item.columnHeader.metricHeader.metricHeaderEntries[0].name];
					const compare = item?.data?.totals[1].values[0];
					const { type } = item.columnHeader.metricHeader.metricHeaderEntries[0];
					const change = ((value / compare) - 1) * 100;
					return (
						<Fragment key={label}>
							<dt>{label}</dt>
							<dd>
								{parseInt(value)}
								<span className={styles.type}>{type === `PERCENT` && `%`}</span>
								<small className={styles[change > 1 ? `up` : `down`]}>{change.toFixed(2)}</small>
							</dd>
						</Fragment>
					);
				})}
			</dl>
		</Fragment>
	);
};

export default Analytics;
