// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import io from 'socket.io-client'

// Modules
import Conversation from './Conversation'

// Actions
import * as Actions from './ConversationActions'

const socket = io('http://api.oh-hi.us')

class ConversationContainer extends Component {
  state = { message: '', messages: [] }

  componentDidMount () {
    const { receiveSocket } = this.props

    socket.emit('conversation mounted')
    socket.on('receive socket', socketID => receiveSocket(socketID))
    socket.on('new socket message', message => this.handleNewMessage(message))
  }

  componentDidUpdate () {
    const { currentConversation } = this.props

    socket.emit('join conversation', currentConversation.id)
  }

  componentWillReceiveProps (nextProps) {
    const {
      currentConversation,
      conversation } = nextProps

    if (conversation.data.length > 0) this.setState({ messages: conversation.data })

    socket.emit('join conversation', currentConversation.id)
  }

  handleChange = (value) => {
    this.setState({ message: value })
  }

  handleSubmit = () => {
    const {
      currentConversation,
      sendMessage,
      user } = this.props

    let newMessage = {
      author: user.id,
      convo_id: currentConversation.id,
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
    const {
      user,
      currentConversation } = this.props

    return (
      <Conversation
        { ...currentConversation }
        currentUser={ user.id }
        messages={ this.state.messages }
        message={ this.state.message }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit } />
    )
  }
}

ConversationContainer.propTypes = {
  conversation: PropTypes.object.isRequired,
  currentConversation: PropTypes.object.isRequired,
  receiveSocket: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ api, app: { currentConversation = {} } }) => {
  const conversation = api['conversation'] || { data: [] }
  const user = api['user'] || { data: { id: 0 } }

  return { currentConversation, conversation, user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer)
