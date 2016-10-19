// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import Footer from 'modules/Footer/Footer'

const mapStateToProps = (state) => {
  const { app } = state

  const { 
    active 
  } = app['footer'] || {
    active: true
  }

  return { active }
}

export default connect(mapStateToProps)(Footer)
