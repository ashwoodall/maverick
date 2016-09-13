import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

// Theme 
import theme from 'modules/Toolbar/theme.scss'

class Toolbar extends Component {

	render() {
		const { children, className } = this.props
		const classes = classnames(
			theme.oh__toolbar,
			className
		)

		return(
			<div className={ classes }>
				{ children }
			</div>
		)
	}
}

Toolbar.proptypes = {
	className: PropTypes.string
}

export default Toolbar