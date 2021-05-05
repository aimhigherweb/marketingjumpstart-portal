import { Fragment, useContext } from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';

import GraphQLFetch from '../../components/parts/fetchData';
import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/partials/dashboard';

import { UserContext } from '../_app';

import { FILTER_CLIENTS } from '../../utils/cms/client/index';

const UserDashboard = () => {
	const { roles } = useContext(UserContext);
	const query = {
		QUERY: FILTER_CLIENTS,
		options: {
			variables: {
				clients: roles
			}
		},
	};

	return (
		<Layout>
			{(roles && roles.length)
				? <RestrictedPage>
					<GraphQLFetch {...query}>
						<Dashboard />
					</GraphQLFetch>
				</RestrictedPage>
				: <p>Looks like you don't have access to any clients, <Link href="/contact">contact us</Link> to resolve the error</p>
			}
		</Layout>
	);
};

export default UserDashboard;
