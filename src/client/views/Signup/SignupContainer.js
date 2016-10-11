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
		return ( <Signup register={ this.props.register } /> )
	}
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

const mapPropsToState = (state) => {
	const { app } = state

	const {
		isFetching,
		lastUpdated,
		data
	} = app['user'] || {
		isFetching: true,
		data: {}
	}

	return {
		isFetching,
		data
	}
}


export default connect(mapPropsToState, mapDispatchToProps)(SignupContainer)