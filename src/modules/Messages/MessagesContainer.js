// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Modules
import Messages from './Messages'
import * as Actions from './MessagesActions'

class MessagesContainer extends Component {
  componentWillMount () {
    this.props.getAllConversations()
  }

  handleConversationClick = (conversation) => {
    this.props.getConversation(conversation)
  }

  render () {
    const { data } = this.props

    return <Messages messages={ data } handleConversationClick={ this.handleConversationClick } />
  }
}

MessagesContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getAllConversations: PropTypes.func,
  getConversation: PropTypes.func.isRequired
}

const mapStateToProps = ({ api: { messages = {} } }) => {
  const { data = [] } = messages

  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
