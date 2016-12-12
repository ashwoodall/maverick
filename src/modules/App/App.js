// Core
import React, { PropTypes } from 'react'

// Modules
import Snackbar from 'modules/Snackbar'

// Theme
import theme from './App.scss'

const App = ({ header, footer, main }) => (
  <div className={ theme.app } data-oh-hi='app'>
    { header }
    <main className={ header ? theme.noHeader : null }>{ main }</main>
    <Snackbar />
    { footer }
  </div>
)

App.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired
}

export default App
