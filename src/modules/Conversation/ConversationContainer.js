// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'

// Modules
import Conversation from './Conversation'

// Actions
import Actions from './ConversationActions'

const socket = io('http://api.oh-hi.us')

class ConversationContainer extends Component {
  state = { message: '', messages: [] }

  componentWillMount () {
    this.props.getConversation(this.props.params.conversationId)
      .then(result => {
        this.props.getMessages(this.props.params.conversationId)
      })
  }

  componentDidMount () {
    const { receiveSocket } = this.props

    socket.emit('conversation mounted')
    socket.on('receive socket', socketID => receiveSocket(socketID))
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

  handleSubmit = () => {
    const { conversation, sendMessage, user } = this.props

    let newMessage = {
      author: user.data.id,
      convo_id: conversation.data.id,
      body: this.state.message
    }

    socket.emit('new message', newMessage)

    sendMessage(newMessage)

    this.setState({ message: '' })
  }

  handleNewMessage = message => {
    let newMessages = this.state.messages

    newMessages.push(message)

    this.setState({ messages: newMessages })
  }

  render () {
    const { conversation, messages, user } = this.props
    const isReady = !conversation.isFetching && !messages.isFetching

    return isReady
      ? <Conversation
        conversation={ conversation.data }
        currentUser={ user.data }
        messages={ this.state.messages }
        message={ this.state.message }
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
  receiveSocket: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ api }) => {
  const conversation = api['conversation'] || { data: {}, isFetching: true }
  const messages = api['messages'] || { data: [], isFetching: true }
  const user = api['user'] || { data: {}, isFetching: true }

  return { conversation, messages, user }
}

export default connect(mapStateToProps, Actions)(ConversationContainer)
