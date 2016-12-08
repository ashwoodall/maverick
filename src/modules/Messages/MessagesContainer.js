// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Modules
import Messages from './Messages'
import Actions from './MessagesActions'

class MessagesContainer extends Component {
  componentWillMount () {
    this.props.getAllConversations()
  }

  handleConversationClick = (conversation) => {
    this.props.getConversation(conversation)
      .then(result => {
        this.props.getMessages(conversation)
      })
  }

  render () {
    const { data, isFetching } = this.props

    return isFetching ? null : <Messages conversations={ data } handleConversationClick={ this.handleConversationClick } />
  }
}

MessagesContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getAllConversations: PropTypes.func,
  getConversation: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = ({ api: { conversations = {} } }) => {
  const { data = [], isFetching = true } = conversations

  return { data, isFetching }
}

export default connect(mapStateToProps, Actions)(MessagesContainer)
