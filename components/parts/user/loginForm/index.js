import Link from 'next/link';
import {
	Form, Input, Label, Button, Checkbox, Legend, Password
} from "../../forms";

import { login } from '../../../../utils/auth/netlifyIdentity';

import styles from './loginForm.module.scss';

const Login = ({ loginSuccess, ...attr }) => {
	const loginSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const { email, password, remember } = form.elements;

		login(email, password, remember, loginSuccess);
	};

	return (
		<Form onSubmit={(e) => loginSubmit(e)} {...attr}>
			<Label htmlFor="email">Email Address</Label>
			<Input
				id="email"
				type="email"
				name="email"
				autoCapitalize="none"
				autoCorrect="off"
				spellCheck="false"
				required
				inputMode="email"
			/>

			<Password required={true}>
				Password
			</Password>

			<Checkbox id="remember" name="remember">Remember Me</Checkbox>

			<p className={styles.forgot}><Link href="/password-reset"><a>Forgot your password?</a></Link></p>

			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default Login;
