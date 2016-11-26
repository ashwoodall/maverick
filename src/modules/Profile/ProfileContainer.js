// Core
import React, { Component } from 'react'

// Modules
import Profile from './Profile'

class ProfileContainer extends Component {
  state = { inverseIndex: 1 }

  handleTabChange = (index) => {
    this.setState({ index: index })
  }

  render () {
    return <Profile index={ this.state.index } handleTabChange={ this.handleTabChange } />
  }
}

export default ProfileContainer
