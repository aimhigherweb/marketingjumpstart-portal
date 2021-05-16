import { Fragment, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { parse, format } from 'date-fns';

import LineChart from '../../../charts/line';

import fetchData from '../../../../../utils/analytics/report';

import { CMSDataContext } from '../../../fetchData';

const AnalyticsLine = () => {
	const { brands } = useContext(CMSDataContext);
	const { isLoading, data, error } = useQuery([
		`analytics`,
		{
			id: brands[0].google_analytics,
			start: `31daysAgo`,
			end: `today`
		}
	], fetchData);
	const displayResults = (res) => {
		const queryResult = res[0].data.rows;
		const id = `set-1`;
		const result = queryResult.map((row) => {
			const date = parse(row.dimensions[0], `yyyyMMdd`, new Date());
			const dateString = format(date, `dd-MMM-yyyy`);

			return {
				x: dateString,
				y: parseInt(row.metrics[0].values[0]),
			};
		});

		return ({
			id,
			name: id,
			xUnit: `Date`,
			yUnit: `users`,
			points: result
		});
	};

	return (
		<Fragment>
			{data && (
				<LineChart {...{
					data: [
						displayResults(data)
					],
				}} />
			)}
		</Fragment>
	);
};

export default AnalyticsLine;
