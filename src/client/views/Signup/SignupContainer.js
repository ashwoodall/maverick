// Core
import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import Signup from 'views/Signup/Signup'

// Signup
import * as Actions from 'views/Signup/SignupActions'

const stations = [
	{ value: 'ft-hood', label: 'Fort Hood'}
]

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

const mapPropsToState = (state) => {
	const { app } = state

	const {
		isFetching,
		lastUpdated,
		data
	} = app['register'] || {
		isFetching: true,
		data: {}
	}

	return {
		isFetching,
		data,
		stations: stations
	}
}


export default connect(mapPropsToState, mapDispatchToProps)(Signup)