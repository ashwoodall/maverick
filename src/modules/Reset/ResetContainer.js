// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { validate } from 'core/utils'
import update from 'react-addons-update'
import { browserHistory } from 'react-router'

// Modules
import Reset from './Reset'

// Api
import Actions from './ResetActions'

class ResetContainer extends Component {
  state = {
    user: {
      password: '',
      passwordConfirm: '',
    },
    validation: { 
      password: '',
      passwordConfirm: '',
    },
    reset: false
  }

  handleChange = (name, value) => {
    let newState = update(this.state, { user: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user } = this.state

    if (user.password !== user.passwordConfirm) {
      let newState = update(this.state, { validation: { $merge: { passwordConfirm: 'Passwords to not match' } } })

      this.setState(newState)

      return
    }

    const { resetPassword, params } = this.props

    resetPassword(user.password, params.token).then(response => {
      this.setState({ reset: true })
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
    const { message, type } = this.props

    return <Reset
      reset={ this.state.reset }
      handleChange={ this.handleChange }
      handleSubmit={ this.handleSubmit }
      handleValidation={ this.handleValidation }
      user={ this.state.user }
      validation={ this.state.validation } />
  }
}

ResetContainer.propTypes = {
  params: PropTypes.object.isRequired,
  resetPassword: PropTypes.func.isRequired
}

export default connect(null, Actions)(ResetContainer)
