import {
	createRef, Fragment, useState, useRef
} from 'react';

import Icon from '../../icon';
import {
	Button, Error,
	Input, 	Label
} from "..";
import styles from './password.module.scss';

const Password = ({
	children, validate, pathname, ...attr
}) => {
	const [passwordVisisble, togglePassword] = useState(false);
	const [requirements, setRequirements] = useState(false);
	const [passwordValidated, setPasswordValidated] = useState(false);
	const ref = useRef();
	const validationError = createRef();
	const validatePassword = ({ target }) => {
		if (!validate) return;

		const password = target.value;
		const err = [];
		const moreThan8Char = new RegExp(/.{8,}/);
		const lessthan100Char = new RegExp(/.{100,}/);
		const atLeast1Num = new RegExp(/\d+/);
		const atLeast1Uppercase = new RegExp(/[A-Z]+/);
		const passwordWord = new RegExp(/password/, `i`);

		// More than 8 characters
		if (!moreThan8Char.test(password)) {
			err.push(`Password must contain more than 8 characters`);
		}

		if (!atLeast1Num.test(password)) {
			err.push(`Password must contain at least 1 number`);
		}

		if (!atLeast1Uppercase.test(password)) {
			err.push(`Password must contain at least 1 uppercase character`);
		}

		if (passwordWord.test(password)) {
			err.push(`Password must not contain the word <em>"password"</em>`);
		}

		if (lessthan100Char.test(password)) {
			err.push(`Password must not be longer than 100 characters`);
		}

		if (err.length) {
			setRequirements(err);
			setPasswordValidated(false);
		} else {
			setRequirements(false);
			setPasswordValidated(true);
		}
	};
	const checkValidate = ({ target }) => {
		if (!validate) return;

		console.log(ref.current);

		const password = target.value;
		const err = [];
		const moreThan8Char = new RegExp(/.{8,}/);
		const lessthan100Char = new RegExp(/.{100,}/);
		const atLeast1Num = new RegExp(/\d+/);
		const atLeast1Uppercase = new RegExp(/[A-Z]+/);
		const passwordWord = new RegExp(/password/, `i`);

		// More than 8 characters
		if (!moreThan8Char.test(password)) {
			err.push(`Password must contain more than 8 characters`);
		}

		if (!atLeast1Num.test(password)) {
			err.push(`Password must contain at least 1 number`);
		}

		if (!atLeast1Uppercase.test(password)) {
			err.push(`Password must contain at least 1 uppercase character`);
		}

		if (passwordWord.test(password)) {
			err.push(`Password must not contain the word <em>"password"</em>`);
		}

		if (lessthan100Char.test(password)) {
			err.push(`Password must not be longer than 100 characters`);
		}

		if (err.length) {
			setRequirements(err);
			setPasswordValidated(false);
		} else {
			setRequirements(false);
			setPasswordValidated(true);
		}
	};

	return (
		<Fragment>
			<Label ref={ref} htmlFor="password">
				{children}
			</Label>
			<div className={styles.password}>
				<Input
					type={passwordVisisble ? `text` : `password`}
					id="password"
					name="password"
					minLength="8"
					pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,100})"
					autoComplete="current-password"
					required
					className={passwordValidated && styles.validated}
					onBlur={(e) => validatePassword(e)}
					onChange={(e) => checkValidate(e)}
					{...attr}
				/>
				<Button
					type="button"
					onClick={() => togglePassword(!passwordVisisble)}
					aria-pressed={passwordVisisble}
				>
					<Icon icon="password-hide" className={styles.hide} />
					<Icon icon="password-show" className={styles.show} />
					<span className="sr-only">Show Password</span>
				</Button>
			</div>
			{requirements
				&& <Error
					tabIndex="-1"
					// ref={validationError}
				>
					<Icon icon="error" className={styles.error_icon} />
					<p>Your password fails to meet the following requirements:</p>
					<ul>
						{requirements.map((err, index) => (
							<li key={index} dangerouslySetInnerHTML={{ __html: err }} />
						))}
					</ul>
					{/* <p><a href={`${pathname}#password`}>Click here to return to the field and resolve the issue.</a></p> */}
				</Error>
			}
		</Fragment>
	);
};

export default Password;
