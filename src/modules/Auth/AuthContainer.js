// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { validate } from 'core/utils'
import update from 'react-addons-update'
import { browserHistory } from 'react-router'
import cookie from 'react-cookie'

// Modules
import Auth from './Auth'
import Verification from 'modules/Verification/Verification'

// Api
import Actions from './AuthActions'

// Duty Stations
const stations = [
  { value: 'Fort Hood', label: 'Fort Hood' },
  { value: 'Other', label: 'Other' }
]

class AuthContainer extends Component {
  state = {
    user: {
      email: '',
      password: '',
      current_station: 'Fort Hood',
    },
    validation: { 
      email: '', 
      password: '' 
    }
  }

  handleChange = (name, value) => {
    let newState = update(this.state, { user: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { login, register, type } = this.props

    if (type === 'login') {
      login({ ...this.state.user }).then(response => {
        const { payload: { success = false, token = '' }} = response

        if (success) {
          cookie.save('jwt', token, { path: '/' });
          browserHistory.push('/')
        }
        
      })
    } else if (type === 'register') {
      register({ ...this.state.user })
    }
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
    const { success, type, message } = this.props

    return (
      <div>
        { success && <Verification email={ this.state.user.email } /> }
        { !success &&
          <Auth
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            handleValidation={ this.handleValidation }
            message={ message }
            stations={ stations }
            type={ type }
            user={ this.state.user }
            validation={ this.state.validation } />
        }
      </div>
    )
  }
}

AuthContainer.propTypes = {
  type: PropTypes.string.isRequired,
  success: PropTypes.bool,
  login: PropTypes.func,
  register: PropTypes.func,
  message: PropTypes.string
}

const mapPropsToState = ({ api: { user = {} } }) => {
  const { success = false, message = null } = user

  return { success, message }
}

export default connect(mapPropsToState, Actions)(AuthContainer)
