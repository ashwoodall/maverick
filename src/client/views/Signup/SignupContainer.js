// Core
import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import Signup from 'views/Signup/Signup'

// Signup
import * as Actions from 'views/Signup/SignupActions'

class SignupContainer extends Component {

	componentWillMount() {
		this.props.setHeader(false)
		this.props.setFooter(false)
	}

	render() {
		return ( <Signup email={ this.props.email } register={ this.props.register } registered={ this.props.isRegistered } /> )
	}
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

const mapPropsToState = (state) => {
	const { app } = state

	const {
		email
	} = app['user'] || {
		email: null
	}

	return {
		email: email,
		isRegistered: email ? true : false
	}
}


export default connect(mapPropsToState, mapDispatchToProps)(SignupContainer)