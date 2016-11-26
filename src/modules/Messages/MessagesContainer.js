// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Modules
import Messages from './Messages'
import * as Actions from './MessagesActions'

class MessagesContainer extends Component {
  componentWillMount () {
    this.props.getAllConversations()
  }

  render () {
    const { data } = this.props

    return <Messages conversations={ data } />
  }
}

MessagesContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getAllConversations: PropTypes.func
}

const mapStateToProps = ({ api: { conversations = {} } }) => {
  const { data = [] } = conversations

  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
