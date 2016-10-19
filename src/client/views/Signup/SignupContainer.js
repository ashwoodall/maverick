// Core
import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import Signup from 'views/Signup/Signup'

// This got really ugly. Need to dig into destructing 
const mapPropsToState = ({ api }) => {
  const { data } = api['user'] || { email: null }
  const { account } = data || { email: null }
  const { email } = account || { email: null }

  return { email }
}

export default connect(mapPropsToState)(Signup)