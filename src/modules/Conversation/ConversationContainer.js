// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

// Modules
import Conversation from 'components/Conversation'

// Actions
import Actions from './ConversationActions'

const socket = io('http://localhost:8080')

class ConversationContainer extends Component {
  state = { message: '' }

  componentWillMount () {
    const {
      getConversation,
      getMessages,
      getUnreadConversationCount,
      params,
      updateReadStatus } = this.props
    
    getConversation(params.conversationId).then(result => {
      getMessages(params.conversationId)

      updateReadStatus(params.conversationId).then(response => {
        getUnreadConversationCount()
      })
    })
  }

  componentDidMount () {
    const { receiveSocket } = this.props

    socket.emit('conversation mounted')
    socket.on('new socket message', message => this.handleNewMessage(message))
  }

  componentDidUpdate () {
    const { conversation } = this.props

    socket.emit('join conversation', conversation.data.id)
  }

  componentWillReceiveProps (nextProps) {
    const { conversation, messages } = nextProps

    this.setState({ messages: messages.data })

    socket.emit('join conversation', conversation.data.id)
  }

  handleChange = (value) => {
    this.setState({ message: value })
  }

  handleFocus = () => {
    const { getUnreadConversationCount, params, updateReadStatus } = this.props

    updateReadStatus(params.conversationId).then(response => {
      getUnreadConversationCount()
    })
  }

  handleSubmit = () => {
    const { conversation, sendMessage, user } = this.props

    let recipientId = user.data.id === conversation.data.recipient_id ? conversation.data.initiator_id : conversation.data.recipient_id

    sendMessage(recipientId, this.state.message).then(response => {
      const { payload: { data = {} } } = response

      socket.emit('new message', { message: data, recipient: recipientId })

      this.setState({ message: '' })
    })
  }

  handleNewMessage = message => {
    const { getMessages, params } = this.props

    getMessages(params.conversationId)
  }

  render () {
    const { conversation, messages, user } = this.props

    return !conversation.isFetching
      ? <Conversation
        conversation={ conversation.data }
        currentUser={ user.data }
        messages={ messages.data }
        message={ this.state.message }
        handleFocus={ this.handleFocus }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit } /> : null
  }
}

ConversationContainer.propTypes = {
  conversation: PropTypes.object.isRequired,
  getConversation: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  updateReadStatus: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ api }) => {
  const conversation = api['conversation'] || { data: {}, isFetching: true }
  const messages = api['messages'] || { data: [], isFetching: true }
  const user = api['user'] || { data: {}, isFetching: true }

  return { conversation, messages, user }
}

export default connect(mapStateToProps, Actions)(ConversationContainer)
