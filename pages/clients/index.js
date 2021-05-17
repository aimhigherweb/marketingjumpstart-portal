import { Fragment, useContext } from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';

import RestrictedPage from '../../components/parts/restricted_page';
import GraphQLFetch from '../../components/parts/fetchData';

import { UserContext } from '../_app';
import { BRANDS } from '../../utils/cms/brand';

import ClientList from '../../components/parts/clientList';

const ClientsOverview = () => {
	const { roles } = useContext(UserContext);
	const query = {
		QUERY: BRANDS,
		options: {
			variables: {
			}
		}
	};
	return (
		<Layout>
			<RestrictedPage permissions={[`admin`]}>
				<GraphQLFetch {...query}>
					<div>
						<h1>Clients</h1>
						<ClientList />
					</div>
				</GraphQLFetch>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientsOverview;
