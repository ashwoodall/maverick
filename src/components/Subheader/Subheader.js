// Core
import React, { PropTypes } from 'react'

// Thirdparty
import Flexbox from 'react-material-flexbox'

// Components
import Divider from 'components/Divider'

// Theme
import theme from './Subheader.scss'

const Subheader = ({ children, title }) => (
  <div className={ theme.subheader } data-oh-hi='subheader'>
    <Flexbox layout='row' align='start center'>
      <h3>{ title }</h3>
      <Flexbox flex />
      { children }
    </Flexbox>
    <Divider />
  </div>
)

Subheader.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Subheader
