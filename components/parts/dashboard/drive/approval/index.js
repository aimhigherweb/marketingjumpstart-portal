import { useQuery } from 'react-query';
import { useMutation } from '@apollo/client';
import { Fragment, useContext } from 'react';
import { format } from 'date-fns';
import fetchFiles from '../../../../../utils/drive/fetch';
import { APPROVE_SOCIALS } from '../../../../../utils/cms/social_media';

import { UserContext } from '../../../../../pages/_app';

import Icon from '../../../icon';

import styles from './approval.module.scss';

const Approvals = ({ folder, id }) => {
	const { loading, data, error } = useQuery([
		`files`,
		{
			folder,
			per_page: 5
		}
	], fetchFiles);
	const { email } = useContext(UserContext);
	const [approveSocials] = useMutation(APPROVE_SOCIALS);
	const details = {
		variables: {
			id,
			date: format(new Date(), `yyyy-MM-dd`),
			approver: email
		}
	};

	if (loading) return <p>Loading...</p>;

	if (error) return <p>Looks like something went wrong</p>;

	return (
		<Fragment>
			<button
				className={styles.button}
				onClick={() => approveSocials({ ...details })}
			>
				Approve
			</button>
			<ul className={styles.items}>
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

	return (
		<Fragment>
			<Icon className={styles.file} icon="file" />
			<a target="_blank" href={props.webViewLink}>{props.name}</a>
		</Fragment>
	);
};

const Image = ({ name, thumbnailLink, webViewLink }) => (
	<figure>
		<img alt={name} src={thumbnailLink} />
		<figcaption><a target="_blank" href={webViewLink}>{name}</a></figcaption>
	</figure>
);

export default Approvals;
