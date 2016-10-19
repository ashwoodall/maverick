// Core
import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import Signup from 'views/Signup/Signup'

const mapPropsToState = (state) => {
	const { app } = state
	const { email } = app['user'] || {
		email: null
	}

	return { email }
}

export default connect(mapPropsToState, mapDispatchToProps)(Signup)