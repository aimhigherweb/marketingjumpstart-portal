import { gql } from '@apollo/client';

export const BRAND_FIELDS = gql`
	fragment BrandFields on Brand {
		name
		brand_id
		logo {
			url
		}
		google_analytics
		analytics_v4
	}
`;

export const GET_BRAND = gql`
	${BRAND_FIELDS}
	query {
		brand {
			...BrandFields
		}
	}
`;

export const FILTER_BRANDS = gql`
	${BRAND_FIELDS}
	query FilterBrands($clients: [String]) {
		brands (
			where: {
				brand_id_in: $clients
			}
		) {
			...BrandFields
		}
	}
`;
