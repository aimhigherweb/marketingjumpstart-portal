import React from 'react'

import styles from './label.module.scss'

const Label = ({children, ...attr}) => (
	<label className={styles.label} {...attr}>{children}</label>
)

export default Label