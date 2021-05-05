import { useContext } from 'react';
import { UserContext } from '../../../pages/_app';
import Nav from '../../dashboard/clientNav';

import GraphQLFetch from '../../parts/fetchData';

import { FILTER_CLIENTS } from '../../../utils/cms/client/index';

import styles from './sidebar.module.scss';

const Sidebar = ({ className }) => {
	const { loggedIn, roles } = useContext(UserContext);
	const query = {
		QUERY: FILTER_CLIENTS,
		options: {
			variables: {
				clients: roles
			}
		}
	};
	const authorised = !!(loggedIn && roles.length);

	return (
		<aside className={`${className} ${styles.sidebar}`}>
			{authorised
				&& <GraphQLFetch {...query}>
					<Nav className={styles.nav} />
				</GraphQLFetch>
			}
		</aside>
	);
};

export default Sidebar;
