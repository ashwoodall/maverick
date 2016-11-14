// Core
import React, { PropTypes } from 'react'
import classnames from 'classnames'

// Theme
import theme from './Container.scss'

const Container = ({ children, className }) => (
  <div className={ classnames(theme.container, className) }>
    { children }
  </div>
)

Container.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default Container
