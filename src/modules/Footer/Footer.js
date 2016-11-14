// Core
import classnames from 'classnames'
import React, { PropTypes } from 'react'

// Modules
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Footer.scss'

const Footer = ({ active }) => (
  <footer className={ active ? classnames(theme.footer, theme.active) : theme.footer } aria-label='Oh hi footer'>
    <Flexbox layout='row' align='center center'>
      <p>If you have a suggestion to improve Oh-hi or would like to share a story about making new friends, we'd love to hear from you. Send us an email! <a href='mailto:hi@oh-hi.us'>hi@oh-hi.us</a></p>
    </Flexbox>
  </footer>
)

Footer.propTypes = {
  active: PropTypes.bool
}

export default Footer
