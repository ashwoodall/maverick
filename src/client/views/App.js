// Core
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Thirdparty
import { Layout, Panel } from 'react-toolbox'

// Styles
import 'core/theme/commons.scss'

// Modules
import * as Actions from 'views/Actions'
import Header from 'modules/Header/HeaderContainer'
import Footer from 'modules/Footer/FooterContainer'

// Theme
import theme from 'views/App.scss'

class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div className={ theme.app } data-oh-hi='app'>
        <Header { ...this.props }/>
        <main>
          { React.cloneElement(children, { ...this.props }) }
        </main>
        <Footer { ...this.props } />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
