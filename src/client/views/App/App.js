// Core
import React, { Component, PropTypes } from 'react'

// Styles
import 'core/theme/commons.scss'

// Theme
import theme from 'views/App/App.scss'

const App = ({ header, footer, main }) => (
  <div className={ theme.app } data-oh-hi='app'>
    { header }
    <main>{ main }</main>
    { footer }
  </div>
)

App.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired
}

export default App
