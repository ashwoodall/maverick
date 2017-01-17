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
    const { startConversation, person } = this.props

    startConversation(person.data, message)

    browserHistory.push(`/messages/new`)
  }

  render () {
    const { person, references, user } = this.props
    const isReady = person.isFetching || user.isFetching

    return isReady ? null : <Person limited={ user.data.completed_profile } person={ person.data } references={ references.data } startConversation={ this.handleConversation } />
  }
}

PersonContainer.propTypes = {
  getReferences: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  person: PropTypes.object.isRequired,
  references: PropTypes.object.isRequired,
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
