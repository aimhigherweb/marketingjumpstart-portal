import { Fragment, useContext } from 'react';
import Link from 'next/link';

import Layout from '../../components/layout';

import RestrictedPage from '../../components/parts/restricted_page';
import Dashboard from '../../components/partials/dashboard';

import { UserContext } from '../_app';

const UserDashboard = () => (
	<Layout>
		{(true)
			? <RestrictedPage>
				<Dashboard />
			</RestrictedPage>
			: <p>Looks like you don't have access to any clients, <Link href="/contact">contact us</Link> to resolve the error</p>
		}
	</Layout>
);

export default UserDashboard;
