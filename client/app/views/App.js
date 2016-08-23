// Core
import React, { Component, PropTypes } from 'react'

// Styles
import 'react-flex/index.scss'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <main>
        { children }
      </main>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
