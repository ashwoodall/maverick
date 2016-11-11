// Core
import classnames from 'classnames'
import React from 'react'

// Theme
import theme from './Container.scss'

const Container = ({ children, className }) => (
	<div className={ classnames(theme.container, className) }>
		{ children }
	</div>
)

export default Container