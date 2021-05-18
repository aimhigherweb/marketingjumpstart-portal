import { useState, useContext, Fragment } from 'react';
import { useRouter } from 'next/router';

import { UserContext } from '../_app';

import {
	Form, Label, Input, Button, TextArea
} from '../../components/parts/forms';

import Layout from '../../components/layout';

const Contact = () => {
	const { name, email } = useContext(UserContext);
	const [submitted, setSubmit] = useState(false);
	const submitRequest = (e) => {
		// TODO: Hook this up to a function
		e.preventDefault();
		setSubmit(!submitted);
	};

	return (
		<Layout>
			<Form onSubmit={(e) => submitRequest(e)}>
				{submitted
					? <p>Thanks for getting in touch, someone will contact you shortly</p>
					: <Fragment>
						<Label htmlFor="name">Name</Label>
						<Input id="name" type="text" name="name" defaultValue={name} />
						<Label htmlFor="email">Email Address</Label>
						<Input id="email" type="email" name="email" defaultValue={email} />
						<Label htmlFor="message">Message</Label>
						<TextArea id="message" name="message" />
						<Button type="submit">Get in touch</Button>
					</Fragment>
				}
			</Form>
		</Layout>
	);
};

export default Contact;
