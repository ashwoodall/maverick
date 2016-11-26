// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

// Modules
import Person from './Person'
import * as Actions from './PersonActions'

class PersonContainer extends Component {
  componentWillMount () {
    this.props.getUserById(this.props.userId)
  }

  handleConversation = () => {
    this.props.startConversation(this.props.currentUser, this.props.userId)

    browserHistory.push(`/messages`)
  }

  render () {
    const { data } = this.props

    return <Person person={ data } startConversation={ this.handleConversation } />
  }
}

PersonContainer.propTypes = {
  currentUser: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  getUserById: PropTypes.func,
  startConversation: PropTypes.func,
  userId: PropTypes.string.isRequired
}

const mapStateToProps = ({ api: { person = {}, user = {} } }) => {
  const { data = {} } = person
  const { data: { id = 0 } } = user

  return { data, currentUser: id }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer)
