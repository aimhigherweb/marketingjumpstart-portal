import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../../../../pages/_app';

import {
	Form, Input, Label, Button, Checkbox, Legend, Hint, Password
} from '../../../../components/parts/forms';

import { signup } from '../../../../utils/auth/netlifyIdentity';

const SignupForm = ({ ...attr }) => {
	const [submitted, setSubmit] = useState(false);

	const signupSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const { elements } = form;

		signup(elements);

		setSubmit(!submitted);

		console.log(`Success, redirecting to login`);
		// router.push(`/login`);
	};

	if (submitted) return <Form>Thanks for signing up, if you're not redirect in the next 5 seconds, <a href="/login">click here to login</a>.</Form>;

	return (
		<Form onSubmit={(e) => signupSubmit(e)} {...attr}>
			<Label htmlFor="name">Name</Label>
			<Input
				type="text"
				id="name"
				name="name"
				required
			/>
			<Label htmlFor="email">Email address</Label>
			<Input
				type="email"
				id="email"
				name="email"
				placeholder="hello@domain.com"
				required
				inputMode="email"
			/>
			<Password
				autoComplete="on"
				validate={true}
			>
				Choose Password
				<Hint>Must contain
					<ul className="requirements">
						<li>At least 8 characters</li>
						<li>At least 1 uppercase letter</li>
						<li>At least 1 number</li>
					</ul>
				</Hint>
			</Password>
			<Button type="submit">Register</Button>
		</Form>
	);
};

export default SignupForm;
