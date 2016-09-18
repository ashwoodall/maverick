// Core
import React, { Component, PropTypes} from 'react'

// Modules
import Login from 'views/Login/Login'

// Api 
import LoginApi from 'views/Login/LoginApi'

class LoginContainer extends Component {

	componentWillMount() {
		this.props.setHeader(false)
		this.props.setFooter(false)
	}

	handleLogin = (user) => {
		const { callAPI } = this.props

		callAPI(LoginApi(user))
	}

	render() {
		return ( <Login login={ this.handleLogin } /> )
	}
}

export default LoginContainer