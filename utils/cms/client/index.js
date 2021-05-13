import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
	query {
		clients {
			name
			slug
		}
	}
`;

export const FILTER_CLIENTS = gql`
	query FilterClients($clients: [String]) {
		clients(
			where: {
				slug_in: $clients
			}
		) {
			name
			slug
			websites {
				domain
				projects {
					title
					slug
				}
				netlify_site
				colours {
					hex
				}
			}
			portal_permissions {
				sections {
					slug
					title
				}
			}
		}
	}
`;
