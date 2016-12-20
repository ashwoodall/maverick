// Core
import React, { Component } from 'react'
import cookie from 'react-cookie'
import { browserHistory } from 'react-router'

// Modules
import Profile from './Profile'

class ProfileContainer extends Component {
  state = { index: 0 }

  handleLogOut = () => {
    cookie.remove('jwt')
    browserHistory.push('/login')
  }

  handleTabChange = (index) => {
    this.setState({ index: index })
  }

  render () {
    return <Profile
      index={ this.state.index }
      handleTabChange={ this.handleTabChange }
      handleLogOut={ this.handleLogOut } />
  }
}

export default ProfileContainer
