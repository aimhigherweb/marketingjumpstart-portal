import { Fragment, useContext } from 'react';

import DocsList from '../../parts/docsList';
import ClientDashboard from '../../dashboard/client';

import GraphQLFetch, { CMSDataContext } from '../../parts/fetchData';

import { FILTER_DOCS } from '../../../utils/cms/docs/index';

import styles from './dashboard.module.scss';

const Dashboard = () => {
	const { clients } = useContext(CMSDataContext);
	const query = {
		QUERY: FILTER_DOCS,
		options: {
			variables: {
				clients: clients.map((client) => client.slug)
			}
		},
	};

	return (
		<div className={styles.dashboard} style={{ '--grid_rows': clients.length }}>
			{clients.map((client) => (
				<ClientDashboard key={client.slug} {...client} />
			))}
			<GraphQLFetch {...query}>
				<div className={styles.docs}>
					<h2>Docs</h2>
					<DocsList />
				</div>
			</GraphQLFetch>
		</div>
	);
};

export default Dashboard;
