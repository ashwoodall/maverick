// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cookie from 'react-cookie'
import io from 'socket.io-client'
import { isEmpty } from 'lodash'
import { browserHistory } from 'react-router'

// Components
import App from './App'

// Actions
import Actions from './AppActions.js'

const socket = io('http://www.api.oh-hi.us')

class AppContainer extends Component {

  componentWillMount () {
    const { getUnreadConversationCount, getUserByToken, showSnackBar } = this.props

    if (cookie.load('jwt')) {
      getUserByToken().then(response => {
        const { payload: { success = false }} = response

        if (!success) {
          cookie.remove('jwt')
          browserHistory.push('/login')
        }

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

  componentWillReceiveProps (nextProps) {
    const { data, getUnreadConversationCount, showSnackBar } = nextProps

    if (isEmpty(data)) return 

    socket.emit('user-connected', data.id)

    getUnreadConversationCount()

    if (!data.completed_profile) showSnackBar()
  }

  render () {
    const { header, footer, main } = this.props

    return <App header={ header } footer={ footer } main={ main } />
  }
}

AppContainer.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired,
  getUnreadConversationCount: PropTypes.func.isRequired,
  getUserByToken: PropTypes.func.isRequired,
  showSnackBar: PropTypes.func.isRequired
}

const mapStateToProps = ({ api: { user = {} } }) => {
  const { data = {} } = user

  return { data }
}

export default connect(mapStateToProps, Actions)(AppContainer)
