import React from 'react';

import styles from './input.module.scss';

const Input = ({ className, ...attr }) => (
	<input className={`${styles.input} ${className}`} {...attr} />
);

export default Input;
