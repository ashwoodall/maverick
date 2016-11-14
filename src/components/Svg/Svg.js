import classnames from 'classnames'
import React, { PropTypes } from 'react'

import theme from './Svg.scss'

const Svg = ({ className, source }) => (
  <div className={ classnames(theme.oh__svg, className) } dangerouslySetInnerHTML={{ __html: source }} />
)

Svg.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string
}

export default Svg
