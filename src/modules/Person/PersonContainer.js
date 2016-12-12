// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

// Modules
import Person from './Person'
import Actions from './PersonActions'

class PersonContainer extends Component {
  componentWillMount () {
    this.props.getReferences(this.props.params.userId)
    this.props.getUserById(this.props.params.userId)
  }

  handleConversation = (message) => {
    let newMessage = {}

    this.props.startConversation(this.props.user.id, this.props.params.userId, message)
      .then(result => {
        if (message) {
          newMessage.convo_id = result.payload.data.id
          newMessage.body = `Lets ${message}`

          this.props.sendMessage(newMessage)
        }
      })

    browserHistory.push(`/messages`)
  }

  render () {
    const { person, references, user } = this.props

    return person.isFetching ? null : <Person limited={ user.data.completed_profile } person={ person.data } references={ references.data } startConversation={ this.handleConversation } />
  }
}

PersonContainer.propTypes = {
  getReferences: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired,
  references: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  startConversation: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ api }) => {
  const person = api['person'] || { data: {}, isFetching: true }
  const references = api['references'] || { data: [], isFetching: true }
  const user = api['user'] || { data: {}, isFetching: true }

  return { person, references, user }
}

export default connect(mapStateToProps, Actions)(PersonContainer)
