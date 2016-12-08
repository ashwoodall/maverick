// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

// Modules
import Person from './Person'
import Actions from './PersonActions'

class PersonContainer extends Component {
  componentWillMount () {
    this.props.getUserById(this.props.params.userId)
  }

  handleConversation = (message) => {
    let newMessage = {}

    this.props.startConversation(this.props.id, this.props.params.userId, message)
      .then(result => {
        if (message) {
          newMessage.convo_id = result.payload.data.id,
          newMessage.body = `Lets ${message}`

          this.props.sendMessage(newMessage)
        }
      })

    browserHistory.push(`/messages`)
  }

  render () {
    const { data, isFetching } = this.props

    return isFetching ? null : <Person person={ data } startConversation={ this.handleConversation } />
  }
}

PersonContainer.propTypes = {
  data: PropTypes.object.isRequired,
  getUserById: PropTypes.func,
  id: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  startConversation: PropTypes.func
}

const mapStateToProps = ({ api: { person = {}, user = {} } }) => {
  const { data = {}, isFetching = true } = person
  const { data: { id = 0 } } = user

  return { data, id, isFetching }
}

export default connect(mapStateToProps, Actions)(PersonContainer)
