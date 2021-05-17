import { Fragment, useContext } from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';

import RestrictedPage from '../../components/parts/restricted_page';
import GraphQLFetch from '../../components/parts/fetchData';

import { UserContext } from '../_app';
import CLIENT_DATA from '../../utils/cms/client';

const ClientsOverview = () => {
	const { roles } = useContext(UserContext);
	const query = {
		QUERY: CLIENT_DATA,
		options: {
			variables: {
				clients: roles
			}
		}
	};

	return (
		<Layout>
			<RestrictedPage permissions={[`admin`]}>
				<GraphQLFetch {...query}>
					<p>Clients List</p>
				</GraphQLFetch>
			</RestrictedPage>
		</Layout>
	);
};

export default ClientsOverview;
