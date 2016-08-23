// Core
import React, { Component, PropTypes } from 'react'

// Third Part
import { Flex } from 'react-flex'

// Images
import logo from '../../assets/logo.png'

// Styles
import './Maintenance.scss'


class Maintenance extends Component {


  render() {
    const { title, tagline } = this.props

    return (
      <Flex column={ true } alignItems="center" justifyContent="center" className="maintenance">
        <img src={ logo } width="150" />
        <p>We all need friends. We need people we can depend on, confide in, and just hang out with. 
        And for the significant others of military service members (MilSOs, for short), it can be especially tough to find friends but essential to have them. 
        That’s what Oh-hi is all about!</p>
        <h4>Coming Soon!</h4>
      </Flex>
    )
  }
}


export default Maintenance
