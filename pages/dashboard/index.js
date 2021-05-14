import { Fragment, useContext } from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';

import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/partials/dashboard';
import GraphQLFetch from '../../components/parts/fetchData';

import { UserContext } from '../_app';
import CLIENT_DATA from '../../utils/cms/client';

const UserDashboard = () => {
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
			{(true)
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
