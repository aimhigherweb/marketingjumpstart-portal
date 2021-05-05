import React, { Fragment, useState } from 'react';

import Label from '../label';

import styles from './checkbox.module.scss';

const Checkbox = ({ children, ...attr }) => {
	const [checked, toggleChecked] = useState(false);
	attr.id = attr.id || attr.name;
	attr.type = attr.type || `checkbox`;

	return (
		<Fragment>
			<input
				className={`${styles.input} ${styles[`input_${attr.type}`]}`}
				defaultChecked={checked}
				onChange={() => toggleChecked(!checked)}
				{...attr}
			/>
			<Label className={`${styles.label} ${styles[`label_${attr.type}`]}`} htmlFor={attr.id}>{children}</Label>
		</Fragment>
	);
};

export default Checkbox;
