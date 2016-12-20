// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Modules
import Activate from './Activate'

// Api
import Actions from './ActivateActions'


class ActivateContainer extends Component {
  componentWillMount () {
    const { activate, location } = this.props

    if (location.query && location.query.encoded) {
      activate(location.query.encoded)
    }
  }

  render () {
    const { message, success, type } = this.props

    return <Activate />
  }
}

ActivateContainer.propTypes = {
  activate: PropTypes.func.isRequired
}

export default connect(null, Actions)(ActivateContainer)
