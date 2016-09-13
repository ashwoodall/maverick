// Core
import React, { Component, PropTypes} from 'react'

// Modules
import Signup from 'views/Signup/Signup'

import SignupApi from 'views/Signup/SignupApi'

const stations = [
	{ value: 'ft-hood', label: 'Fort Hood'},
	{ value: 'ft-benning', label: 'Fort Benning'},
	{ value: 'ft-fort', label: 'Fort Fort'}
]

class SignupContainer extends Component {

	componentWillMount() {
		this.props.setHeader(false)
		this.props.setFooter(false)
	}

	handleSubmit = (user) => {
		const { callAPI } = this.props

		callAPI(SignupApi(user))
	}

	render() {
		return ( <Signup stations={ stations } register={ this.handleSubmit }/> )
	}
}

export default SignupContainer