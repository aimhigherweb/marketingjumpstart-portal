import React from 'react';

import styles from './form.module.scss';

const Form = ({ children, className, ...attr }) => (
	<form {...attr} className={`${styles.form} ${className}`}>
		{children}
	</form>
);

export default Form;
