// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Header from 'modules/Header/Header'

const mapStateToProps = (state) => {
	const { app } = state

	const { 
		active 
	} = app['header'] || {
		active: true
	}

	return { active }
}

export default connect(mapStateToProps)(Header)
