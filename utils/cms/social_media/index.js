import { gql } from '@apollo/client';

export const SOCIAL_FIELDS = gql`
	fragment SocialMediaFields on SocialMedia {
		brand {
			name
			brand_id
		}
		folder
		approved
		id
	}
`;

export const GET_SOCIALS = gql`
	${SOCIAL_FIELDS}
	query {
		socialMedia {
			...SocialMediaFields
		}
	}
`;

export const SOCIALS_TO_APPROVE = gql`
	${SOCIAL_FIELDS}
	query SocialsToApprove($clients: [String]) {
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
	}
`;

export const APPROVE_SOCIALS = gql`
	${SOCIAL_FIELDS}
	mutation ApproveMedia(
		$id: ID! 
	) {
		updateSocialMedia(
			input: {
				where: { 
					id: $id
				}
				data: {
					approved: true
				}
			}
		) {
			socialMedia {
				...SocialMediaFields
			}
		}
	}
`;
