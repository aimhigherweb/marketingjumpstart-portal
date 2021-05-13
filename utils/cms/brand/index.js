import { gql } from '@apollo/client';

export const GET_BRAND = gql`
	query {
		brand {
			name
			brand_id
		}
	}
`;

export const FILTER_BRANDS = gql`
	query FilterBrands($clients: [String]) {
		brands (
			where: {
				brand_id_in: $clients
			}
		) {
			name
			brand_id
		}
	}
`;
