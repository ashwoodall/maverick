import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { forEach } from 'lodash'

import theme from 'modules/Flexbox/Flexbox.scss'

const configureClasses = (props) => {
	const classes = {}

	forEach(props, (value, key) => {
		let className


		if (typeof value === 'boolean') {
			className = theme[key]

			classes[className] = true
		} else if (typeof value === 'string' || typeof value === 'number') {
			let className = theme[key + '__' + value]

			classes[className] = true
		}
	})

	return classnames(classes)
}

class Flexbox extends Component {
	render() {
		const { children } = this.props
		const classes = configureClasses(this.props)

		return(
			<div className={ classes }>{ children }</div>
		)
	}
}
 
Flexbox.propTypes = {
	align: PropTypes.string,
	column: PropTypes.bool,
	layout: PropTypes.bool,
	justify: PropTypes.string,
	row: PropTypes.bool
}

export default Flexbox