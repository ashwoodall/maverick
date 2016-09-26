import React, { Component, PropTypes } from 'react'

class Form extends Component {

	handleSubmit = () => {
		const { submit, validated } = this.props

		if (!validated) return

		return submit()
	}

	render () {
		return (
			<form onSubmit={ this.handleSubmit }>
				{ this.props.children }
			</form>
		)
	}
}

export default Form