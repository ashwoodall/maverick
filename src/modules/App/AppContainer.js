// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import io from 'socket.io-client'

// Components
import App from './App'

// Actions
import Actions from './AppActions.js'

const socket = io('http://localhost:8080')

class AppContainer extends Component {

  componentWillMount () {
    const { getUnreadConversationCount, getUserByToken, showSnackBar } = this.props

    if (cookie.load('jwt')) {
      getUserByToken().then(response => {
        const { payload: { data = {}, success = false }} = response

        if (!success) {
          cookie.remove('jwt')
          browserHistory.push('/login')
        }

        getUnreadConversationCount()

        if (data && !data.completed_profile) showSnackBar()
        if (data && data.id) socket.emit('user-connected', data.id)
      })
    }
  }

  componentDidMount () {
    const { getAllConversations, getUnreadConversationCount } = this.props

    socket.on('new notification', notification => {
      getUnreadConversationCount().then(result => {
        getAllConversations()
      })
    })
  }

  render () {
    const { header, footer, main } = this.props

    return <App header={ header } footer={ footer } main={ main } />
  }
}

AppContainer.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired,
  getUnreadConversationCount: PropTypes.func.isRequired,
  getUserByToken: PropTypes.func.isRequired,
  showSnackBar: PropTypes.func.isRequired
}

export default connect(null, Actions)(AppContainer)
