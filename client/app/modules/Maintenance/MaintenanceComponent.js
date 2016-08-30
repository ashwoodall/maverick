// Core
import React, { Component, PropTypes } from 'react'

// Third Part
import Flexbox from 'modules/Flexbox/Flexbox'

// Images
import logo from '../../assets/logo.png'

// Styles
import './Maintenance.scss'


class Maintenance extends Component {


  render() {
    const { title, tagline } = this.props

    return (
      <Flexbox flex={ true } align="center" />
    )
  }
}


export default Maintenance
