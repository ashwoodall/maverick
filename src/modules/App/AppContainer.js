// Core
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Components
import App from './App'

// Actions
import * as Actions from './AppActions.js'

class AppContainer extends Component {

  componentWillMount () {
    this.props.getUserByToken()
  }

  render () {
    const { header, footer, main } = this.props

    return <App header={ header } footer={ footer } main={ main } />
  }
}

App.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired,
  getUserByToken: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(AppContainer)
