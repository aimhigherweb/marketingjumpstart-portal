import { Fragment, useContext } from 'react';
import Link from 'next/link';

import { CMSDataContext } from '../fetchData';


const ClientList = () => {
	const { brands } = useContext(CMSDataContext);

	return (
		<ul>
			{brands?.map((brand) => (
				<li key={brand.brand_id}>
					<Link href={`/clients/${brand.brand_id}`}>
						<a>{brand.name}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ClientList;
