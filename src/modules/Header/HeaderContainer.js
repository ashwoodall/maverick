// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

// Modules
import Header from './Header'
import * as Actions from './HeaderActions'

class HeaderContainer extends Component {
  componentWillMount () {
    const { pathname } = this.props.location

    this.props.setActive(pathname)
  }

  handleNavigate = (route) => {
    browserHistory.push(`/${route}`)

    this.props.setActive(`/${route}`)
  }

  render () {
    const { count } = this.props

    return <Header active={ this.props.active } handleClick={ this.handleNavigate } count={ count } />
  }
}

HeaderContainer.propTypes = {
  active: PropTypes.string,
  count: PropTypes.number.isRequired,
  setActive: PropTypes.func,
  location: PropTypes.object
}

const mapStateToProps = ({ app: { navigation = {} }, api }) => {
  const { active = '' } = navigation
  const { data: { count = 0 } } = api['unread'] || { data: {} }

  return { active, count }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
