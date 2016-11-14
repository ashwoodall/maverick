// Core
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Modules
import Auth from './Auth'
import Verification from 'modules/Verification/Verification'

// Api
import * as Actions from './AuthActions'

class AuthContainer extends Component {
  state = { email: '', password: '' }

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
    const { email, type } = this.props
    let showVerification = email && type === 'submit'

    return (
      <div>
        { showVerification && <Verification email={ email } /> }
        { !email &&
          <Auth
            email={ this.state.email }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit }
            password={ this.state.password }
            type={ type } />
        }
      </div>
    )
  }
}

AuthContainer.propTypes = {
  type: PropTypes.string.isRequired,
  email: PropTypes.string,
  login: PropTypes.func,
  register: PropTypes.func
}

const mapPropsToState = ({ app: { user = {} } }) => {
  const { email = null } = user

  return { email }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(AuthContainer)
