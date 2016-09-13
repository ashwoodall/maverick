import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'
import { forEach, isArray } from 'lodash'

import theme from 'modules/Flexbox/Flexbox.scss'

const configureClasses = (props) => {
	const classes = {}

	forEach(props, (value, key) => {
		if (key === 'children') return

		let className

		if (typeof value === 'boolean') {
			className = theme[key]

			classes[className] = true
		} else if (typeof value === 'string' || typeof value === 'number') {
			className = typeof value === 'string' && value.indexOf(' ') >= 0 ?
				theme[key + '__' + value.replace(/ /g, "__")] :
				theme[key + '__' + value]

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
	layout: PropTypes.string,
	'layout-xs': PropTypes.string,
	'layout-sm': PropTypes.string,
	'layout-md': PropTypes.string,
	'layout-lg': PropTypes.string,
	'layout-xl': PropTypes.string
}

export default Flexbox