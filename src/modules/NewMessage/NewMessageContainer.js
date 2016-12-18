 // Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { browserHistory } from 'react-router'
import forms from 'core/constants/forms'

// Modules
import Conversation from 'components/Conversation'

// Actions
import Actions from './NewMessageActions'

const { activities } = forms

class NewMessageContainer extends Component {
  state = { message: '' }

  componentWillMount () {
    const { message } = this.props

    if (!message.message) return 

    let newMessage = find(activities, { label: message.message })

    this.setState({ message: `Oh hi, ${newMessage.message}` })
  }

  handleChange = (value) => {
    this.setState({ message: value })
  }

  handleSubmit = () => {
    const { message, sendMessage } = this.props

    sendMessage(message.userId, this.state.message).then(response => {
      browserHistory.push(`/messages/${response.payload.data.convo_id}`)
    })
  }

  render () {
    const { message, user } = this.props

    return message
      ? <Conversation
        conversation={ { participant: message } }
        currentUser={ user.data }
        messages={ [] }
        message={ this.state.message }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit } /> : null
  }
}

NewMessageContainer.propTypes = {
  message: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ api, app: { message = {} } }) => {
  const user = api['user'] || { data: {}, isFetching: true }

  return { user, message }
}

export default connect(mapStateToProps, Actions)(NewMessageContainer)
