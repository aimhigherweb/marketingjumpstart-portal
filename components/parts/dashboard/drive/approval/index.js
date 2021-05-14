import { useQuery } from 'react-query';
import { useMutation } from '@apollo/client';
import { Fragment } from 'react';
import fetchFiles from '../../../../../utils/drive/fetch';
import { APPROVE_SOCIALS } from '../../../../../utils/cms/social_media';

const Approvals = ({ folder, id }) => {
	const { loading, data, error } = useQuery([
		`files`,
		{
			folder,
			per_page: 5
		}
	], fetchFiles);
	const [approveSocials] = useMutation(APPROVE_SOCIALS);
	const details = {
		variables: {
			id
		}
	};

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Looks like something went wrong</p>;

	return (
		<Fragment>
			<button onClick={() => approveSocials({ ...details })}>Approve</button>
			<ul>
				{data && data?.files?.map((file) => (
					<li key={JSON.stringify(file)}>
						<Preview {...file} />
					</li>
				))}
			</ul>
		</Fragment>
	);
};

const Preview = ({ mimeType, ...props }) => {
	if (RegExp(/^image\//).test(mimeType)) return <Image {...props} />;

	return <a target="_blank" href={props.webViewLink}>{props.name}</a>;
};

const Image = ({ name, thumbnailLink }) => (
	<img alt={name} src={thumbnailLink} />
);

export default Approvals;
