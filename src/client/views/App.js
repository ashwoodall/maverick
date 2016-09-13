// Core
import React, { Component, PropTypes } from 'react'
import { subscribe } from 'horizon-react'
import { bindActionCreators } from 'redux'

// Thirdparty
import { Layout, Panel } from 'react-toolbox'

// Styles
import 'core/theme/commons.scss'

// Modules
import * as Actions from 'views/Actions'
import Header from 'modules/Header/HeaderContainer'
import Footer from 'modules/Footer/FooterContainer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props

    return (
      <Layout>
        <Panel>
          <Header { ...this.props }/>
          <main>
            { React.cloneElement(children, { ...this.props }) }
            <Footer { ...this.props } />
          </main>
        </Panel>
      </Layout>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default subscribe({ mapDispatchToProps })(App)
