import React from 'react'

import styles from './legend.module.scss'

const Legend = ({children, ...attr}) => (
	<legend className={styles.label} {...attr}>{children}</legend>
)

export default Legend