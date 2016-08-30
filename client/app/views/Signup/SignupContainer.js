// Core
import React, { Component, PropTypes} from 'react'

// Modules
import Signup from 'views/Signup/Signup'

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

	render() {
		return ( <Signup stations={ stations }/> )
	}
}

export default SignupContainer