import { useState, Fragment } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import {
	Form, Label, Input, Button, Hint
} from '../../components/parts/forms';

import Layout from '../../components/layout';

import { requestReset } from '../../utils/auth/netlifyIdentity';

// import styles from './register.module.scss';

const PasswordReset = () => {
	const [submitted, setSubmit] = useState(false);
	const submitRequest = (e) => {
		e.preventDefault();

		e.preventDefault();

		const form = e.target;
		const { email } = form.elements;

		requestReset(email.value);

		setSubmit(!submitted);
	};

	return (
		<Layout>
			<Form onSubmit={(e) => submitRequest(e)}>
				{submitted
					? <p>If that email address is registered, we'll send you a password reset link to your email.</p>
					: <Fragment>
						<Label htmlFor="email">
					Email Address
							<Hint>Enter the email address for your account and if we have it registered, we'll send you a password reset link.</Hint>
						</Label>
						<Input id="email" type="email" name="email" />
						<Button type="submit">Reset Password</Button>
					</Fragment>
				}
			</Form>
		</Layout>
	);
};

export default PasswordReset;
