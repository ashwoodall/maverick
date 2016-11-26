// Core
import React, { Component } from 'react'

// Modules
import Profile from './Profile'

class ProfileContainer extends Component {
  state = { inverseIndex: 1 }

  handleInverseTabChange = (index) => {
    this.setState({ index: index })
  }

  render() {
    return (<Profile index={ this.state.index } handleInverseTabChange={ this.handleInverseTabChange } />)
  }
}

export default ProfileContainer
