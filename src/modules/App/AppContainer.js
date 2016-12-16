// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'

// Components
import App from './App'

// Actions
import Actions from './AppActions.js'

class AppContainer extends Component {

  componentWillMount () {
    if (cookie.load('jwt')) {
      this.props.getUserByToken().then(response => {
        const { payload: { data = {}, success = false }} = response

        if (!success) {
          cookie.remove('jwt')
          browserHistory.push('/login')
        }

        if (data && !data.completed_profile) this.props.showSnackBar()
      })
    }
  }

  render () {
    const { header, footer, main } = this.props

    return <App header={ header } footer={ footer } main={ main } />
  }
}

AppContainer.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired,
  getUserByToken: PropTypes.func
}

export default connect(null, Actions)(AppContainer)
