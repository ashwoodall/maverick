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
    const { currentConversation, data, receiveMessage, receiveSocket } = this.props

    socket.emit('conversation mounted')
    socket.on('receive socket', socketID => receiveSocket(socketID))
    socket.on('new socket message', message => {
      let newMessages = this.state.messages
      newMessages.push(message)
      this.setState({ messages: newMessages })
    })
  }

  componentDidUpdate () {
    const { currentConversation } = this.props

    socket.emit('join conversation', currentConversation.id)
  }

  componentWillReceiveProps (nextProps) {
    const { currentConversation, data } = nextProps

    if (data.length > 0) this.setState({ messages: data })

    socket.emit('join conversation', currentConversation.id)
  }

  handleChange = (value) => {
    this.setState({ message: value })
  }

  handleSubmit = () => {
    const { currentConversation, sendMessage, currentUser } = this.props

    let newMessage = {
      author: currentUser,
      convo_id: currentConversation.id,
      body: this.state.message
    }

    socket.emit('new message', newMessage)

    sendMessage(newMessage)

    this.setState({ message: '' })
  }

  render () {
    return <Conversation { ...this.props } messages={ this.state.messages } message={ this.state.message } handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />
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
