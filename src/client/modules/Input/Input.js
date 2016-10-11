import React, { Component, PropTypes } from 'react'
import { clone, omit } from 'lodash'

import { Input } from 'react-toolbox'

import validation from 'core/constants/validation'

class Field extends Component {
	state = { value: '', dirty: false, error: '' }

	handleChange = (value) => {
		const { rule } = this.props

		const regex = validation[rule].regex

		console.log(regex.test(value))
	}

	render () {
		const props = clone(this.props)

		delete props['rule']

		return (
			<Input { ...props } onChange={ this.handleChange } />
		)
	}
}

Field.propTypes = {
	rule: PropTypes.string
}

export default Field
