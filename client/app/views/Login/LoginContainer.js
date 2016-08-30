// Core
import React, { Component, PropTypes} from 'react'

// Modules
import Login from 'views/Login/Login'

class LoginContainer extends Component {

	componentWillMount() {
		this.props.setHeader(false)
		this.props.setFooter(false)
	}

	render() {
		return ( <Login /> )
	}
}

export default LoginContainer