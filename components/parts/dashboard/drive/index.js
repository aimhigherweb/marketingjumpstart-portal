import { useContext } from 'react';

import { CMSDataContext } from '../../fetchData';

import Approvals from './approval';

const Drive = () => {
	const { socialMedias } = useContext(CMSDataContext);

	return (
		<div>
			<h2>Drive Files</h2>
			{socialMedias.map((approval) => (
				<Approvals key={JSON.stringify(approval)} {...approval} />
			))}
		</div>
	);
};
export default Drive;
