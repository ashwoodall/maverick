// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Modules
import Conversation from './Conversation'

// Actions
import * as Actions from './ConversationActions'

class ConversationContainer extends Component {
  state = { message: '' }

  handleChange = (value) => {
    this.setState({ message: value })
  }

  handleSubmit = () => {
    const { currentConversation, sendMessage } = this.props

    sendMessage(currentConversation.id, this.state.message)

    this.setState({ message: '' })
  }

  render () {
    return <Conversation { ...this.props } message={ this.state.message } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
  }
}

ConversationContainer.propTypes = {
  currentConversation: PropTypes.object.isRequired,
  currentUser: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  sendMessage: PropTypes.func.isRequired
}

const mapStateToProps = ({ api: { conversation = {}, user = {} }, app: { currentConversation = {} } }) => {
  const { data = [] } = conversation
  const { data: { id = 0 } } = user

  return { data, id, currentUser: id, currentConversation }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
