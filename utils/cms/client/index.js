import { gql } from '@apollo/client';

import { SOCIAL_FIELDS } from '../social_media';
import { BRAND_FIELDS } from '../brand';

const CLIENT_DATA = gql`
	${SOCIAL_FIELDS}
	${BRAND_FIELDS}
	query ClientData($clients: [String]) {
		socialMedias(
			sort: "due:desc"
			where: {
			approved: false
				brand: {
					brand_id_in: $clients
				}
			}
		) {
			...SocialMediaFields
		}
		brands (
			where: {
				brand_id_in: $clients
			}
		) {
			...BrandFields
		}
	}
`;

export default CLIENT_DATA;
