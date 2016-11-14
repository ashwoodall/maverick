// Core
import React, { PropTypes } from 'react'

// Styles
import 'core/theme/commons.scss'

// Theme
import AppContainer from 'modules/App/AppContainer'

const App = ({ header, footer, main }) => (
  <AppContainer header={ header } footer={ footer } main={ main } />
)

App.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  main: PropTypes.element.isRequired
}

export default App
