import React from 'react'

import styles from './button.module.scss'

const Button = ({children, ...attr}) => (
	<button className={styles.button} {...attr}>
		{children}
	</button>
)

export default Button