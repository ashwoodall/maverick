// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// Modules
import Messages from './Messages'
import Actions from './MessagesActions'

class MessagesContainer extends Component {
  componentWillMount () {
    const { getAllConversations } = this.props
    
    getAllConversations()
  }

  handleConversationClick = (conversation) => {
    browserHistory.push(`/messages/${conversation.id}`)
  }

  render () {
    const { data, isFetching } = this.props

    return isFetching ? null : <Messages conversations={ data } handleConversationClick={ this.handleConversationClick } />
  }
}

MessagesContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getAllConversations: PropTypes.func,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = ({ api: { conversations = {} } }) => {
  const { data = [], isFetching = true } = conversations

  return { data, isFetching }
}

export default connect(mapStateToProps, Actions)(MessagesContainer)
