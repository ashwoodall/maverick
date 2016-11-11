// Core
import classnames from 'classnames'
import React from 'react'

// Theme
import theme from './Container.scss'

const Container = (props) => (
	<div className={ classnames(theme.oh__container, props.className) }>
		{ props.children }
	</div>
)

export default Container