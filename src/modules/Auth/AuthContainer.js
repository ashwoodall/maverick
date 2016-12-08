// Core
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import Auth from './Auth'
import Verification from 'modules/Verification/Verification'

// Api
import * as Actions from './AuthActions'

// Duty Stations
const stations = [
  { value: 'Fort Hood', label: 'Fort Hood' },
  { value: 'Other', label: 'Other' }
]

class AuthContainer extends Component {
  state = { email: '', password: '', current_station: '' }

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = () => {
    const { login, register, type } = this.props

    if (type === 'login') {
      login({ ...this.state })
    } else if (type === 'register') {
      register({ ...this.state })
    }
  }

  render () {
    const { success, type } = this.props

    return (
      <div>
        { success && <Verification email={ this.state.email } /> }
        { !success &&
          <Auth
            current_station={ this.state.current_station }
            email={ this.state.email }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            password={ this.state.password }
            stations={ stations }
            type={ type } />
        }
      </div>
    )
  }
}

AuthContainer.propTypes = {
  type: PropTypes.string.isRequired,
  success: PropTypes.bool,
  login: PropTypes.func,
  register: PropTypes.func
}

const mapPropsToState = ({ api: { register = {} } }) => {
  const { success = false } = register

  return { success }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(AuthContainer)
