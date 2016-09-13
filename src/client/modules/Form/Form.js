import React, { Component, PropTypes } from 'react'

class Form extends Component {
	render () {
		const { children } = this.props

		return (
			<form>
				{ children }
			</form>
		)
	}
}