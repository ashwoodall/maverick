// Core
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Styles
import 'core/theme/commons.scss'

// Theme
import theme from 'views/App/App.scss'

import SnackbarTest from 'modules/Snackbar/Snackbar'

const App = ({ header, footer, main }) => (

  <div className={ theme.app } data-oh-hi='app'>
    { header }
    <main>{ main }</main>

    { footer }
    <SnackbarTest />
  </div>
)


App.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired
}

export default App
