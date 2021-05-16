import { Fragment, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { parse, format } from 'date-fns';

import fetchData from '../../../../utils/ads/index';

import { CMSDataContext } from '../../fetchData';

const GoogleAds = () => {
	const { brands } = useContext(CMSDataContext);
	const { isLoading, data, error } = useQuery([
		`ads`,
		{
			id: brands[0].ad_id
		}
	], fetchData);

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>Something went wrong</p>;

	return (
		<div>
			<h2>Google Ads</h2>
		</div>
	);
};

export default GoogleAds;
