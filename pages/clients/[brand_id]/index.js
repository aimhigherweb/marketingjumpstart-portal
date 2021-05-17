import { Fragment, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../../components/layout';

import RestrictedPage from '../../../components/parts/restricted_page';
import Dashboard from '../../../components/partials/dashboard';
import GraphQLFetch from '../../../components/parts/fetchData';

import { UserContext } from '../../_app';
import CLIENT_DATA from '../../../utils/cms/client';

const ClientDashboard = () => {
	const { roles } = useContext(UserContext);
	const router = useRouter();
	const { brand_id } = router.query;
	const query = {
		QUERY: CLIENT_DATA,
		options: {
			variables: {
				clients: [brand_id]
			}
		}
	};

	return (
		<Layout>
			{(roles && roles.length && roles.includes(`admin`))
				? <RestrictedPage>
					<GraphQLFetch {...query}>
						<Dashboard />
					</GraphQLFetch>
				</RestrictedPage>
				: <p>Looks like you don't have access to this page, <Link href="/contact">contact us</Link> to resolve the error</p>
			}
		</Layout>
	);
};

export default ClientDashboard;
