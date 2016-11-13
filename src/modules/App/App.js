// Core
import React, { PropTypes } from 'react'

// Theme
import theme from './App.scss'

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
