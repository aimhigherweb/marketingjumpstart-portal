import {
	useState, Fragment, useEffect, useContext
} from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import {
	Form, Input, Label, Button, Hint, Password
} from '../../components/parts/forms';

import Layout from '../../components/layout';

import { recoverUser, updateUser } from '../../utils/auth/netlifyIdentity';

// import styles from './register.module.scss';

const PasswordReset = ({ attr }) => {
	const router = useRouter();
	const { name, loggedIn, email } = useContext(UserContext);
	const [submitted, setSubmit] = useState(false);
	const submitRequest = (e) => {
		e.preventDefault();

		const form = e.target;
		const { elements } = form;
		const details = {
			email: elements.email.value,
			name: elements.name.value,
		};

		if (elements.password.value && elements.password.value !== ``) {
			details.password = elements.password.value;
		}

		updateUser(details);

		setSubmit(!submitted);
	};

	return (
		<Layout>
			<div>
				{loggedIn
					&& <Form onSubmit={(e) => submitRequest(e)} {...attr}>
						<Label htmlFor="name">Name</Label>
						<Input
							type="text"
							id="name"
							defaultValue={name}
							name="name"
						/>
						<Label htmlFor="email">Email Address</Label>
						<Input
							type="email"
							id="email"
							name="email"
							defaultValue={email}
							placeholder="hello@domain.com"
							inputMode="email"
						/>
						<Password
							autoComplete="on"
							validate={true}
							pathname={router.pathname}
						>
							Change Password
							<Hint>Must contain
								<ul className="requirements">
									<li>At least 8 characters</li>
									<li>At least 1 uppercase letter</li>
									<li>At least 1 number</li>
								</ul>
							</Hint>
						</Password>
						<Button type="submit">Update Details</Button>
					</Form>
				}
			</div>
		</Layout>
	);
};

export default PasswordReset;
