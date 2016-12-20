// Core
import React, { Component, PropTypes } from 'react'

// Modules
import Verification from './Verification'

class VerificationContainer extends Component {
  state = { email: '' }
  
  componentWillMount () {
    const { params } = this.props

    this.setState({ email: params.userEmail })
  }

  render () {
    const { message, success, type } = this.props

    return this.state.email ? <Verification email={ this.state.email } /> : null
  }
}

export default VerificationContainer
