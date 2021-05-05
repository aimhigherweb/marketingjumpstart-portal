import React from 'react';

import styles from './hint.module.scss';

const Hint = ({ children, ...attr }) => (
	<div className={styles.hint} {...attr}>{children}</div>
);

export default Hint;
