// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { validate } from 'core/utils'
import update from 'react-addons-update'
import { browserHistory } from 'react-router'

// Modules
import Forgot from './Forgot'

// Actions
import Actions from './ForgotActions'

class ForgotContainer extends Component {
  state = { 
    user: {
      email: '' 
    },
    validation: {
      email: '',
    }
  }

  handleChange = (name, value) => {
    let newState = update(this.state, { user: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { sendEmail } = this.props

    sendEmail({ ...this.state.user }).then(respone => {
      browserHistory.push(`/verification/${this.state.user.email}`)
    })
  }

  handleValidation = (type, value) => {
    let message = validate(type, value)
    let newState 

    if (message) {
      newState = update(this.state, { validation: { $merge: { [type]: message } } })
    } else {
      newState = update(this.state, { validation: { $merge: { [type]: '' } } })
    }

    this.setState(newState)
  }

  render () {

    return <Forgot
      handleChange={ this.handleChange }
      handleSubmit={ this.handleSubmit }
      handleValidation={ this.handleValidation }
      user={ this.state.user }
      validation={ this.state.validation } />
  }
}

export default connect(null, Actions)(ForgotContainer)
