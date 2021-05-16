import { Fragment, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { parse, format } from 'date-fns';

import fetchData from '../../../../utils/analytics/report';

import { CMSDataContext } from '../../fetchData';

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

	// console.log({ isLoading, data, error });

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>Something went wrong</p>;

	return (
		<Fragment>
			<h2>Analytics</h2>
			<ul>
				{data.map((item) => {
					if (item?.data?.totals) {
						return (
							<li>
								<p>{item?.data?.totals[0].values[0]}</p>
							</li>
						);
					}
				})}
			</ul>
		</Fragment>
	);
};

export default Analytics;
