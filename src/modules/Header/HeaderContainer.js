// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

// Modules
import Header from './Header'
import * as Actions from './HeaderActions'

class HeaderContainer extends Component {

  handleNavigate = (route) => {
    browserHistory.push(`/${route}`)

    this.props.setActive(route)
  }

  render () {
    return <Header active={ this.props.active } handleClick={ this.handleNavigate } />
  }
}

HeaderContainer.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func
}

const mapStateToProps = ({ app: { navigation = {} } }) => {
  const { active = null } = navigation

  return { active }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
