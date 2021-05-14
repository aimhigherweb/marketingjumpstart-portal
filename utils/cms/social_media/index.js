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
		title
		due
		start
		approved_by
		approved_date
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
		$approver: String!
		$date: Date!
	) {
		updateSocialMedia(
			input: {
				where: { 
					id: $id
				}
				data: {
					approved: true
					approved_by: $approver
					approved_date: $date
				}
			}
		) {
			socialMedia {
				...SocialMediaFields
			}
		}
	}
`;
